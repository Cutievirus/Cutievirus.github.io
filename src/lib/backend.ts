import { supabase, FUNCTIONS_URL } from './supabase';

export type Provider = 'patreon' | 'itchio';

async function authHeaders(): Promise<HeadersInit> {
	const { data: { session } } = await supabase.auth.getSession();
	if (!session) throw new Error('Not signed in');
	return {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${session.access_token}`
	};
}

/** Auth headers when a session exists, plain JSON headers otherwise. */
async function softAuthHeaders(): Promise<HeadersInit> {
	const { data: { session } } = await supabase.auth.getSession();
	const headers: Record<string, string> = { 'Content-Type': 'application/json' };
	if (session) headers['Authorization'] = `Bearer ${session.access_token}`;
	return headers;
}

/**
 * Start OAuth with a provider. Returns the provider's authorize URL.
 * When signed in, the session goes along so the backend knows who is
 * starting the flow (that's what makes Connect / Move / Merge possible).
 */
export async function oauthStart(provider: Provider, next = '/connect'): Promise<string> {
	const res = await fetch(`${FUNCTIONS_URL}/oauth-start`, {
		method: 'POST',
		headers: await softAuthHeaders(),
		body: JSON.stringify({ provider, next })
	});
	if (!res.ok) throw new Error('Could not start OAuth');
	const { url } = await res.json();
	return url;
}

/** Start OAuth and send the browser to the provider. */
export async function connectProvider(provider: Provider) {
	location.href = await oauthStart(provider);
}

export interface ItchioLinkResult {
	login?: string;
	pending?: string;
	ok?: boolean;
}

/**
 * itch.io hands its token back in the URL fragment; forward it to the backend.
 * The result says what happens next: follow `login` to sign in, or go to the
 * confirmation page with `pending`.
 */
export async function linkItchio(accessToken: string, state: string): Promise<ItchioLinkResult> {
	const res = await fetch(`${FUNCTIONS_URL}/itchio-link`, {
		method: 'POST',
		headers: await softAuthHeaders(),
		body: JSON.stringify({ access_token: accessToken, state })
	});
	const data = await res.json().catch(() => ({}));
	if (!res.ok) throw new Error(data.error ?? 'Link failed');
	return data;
}

export type PendingActionKind = 'login' | 'create' | 'connect' | 'move' | 'merge';

export interface PendingDescription {
	action: PendingActionKind;
	connection: {
		source: Provider;
		remote_id: string;
		key: string;
		display_name: string | null;
		username: string | null;
		avatar_url: string | null;
	};
	account: { display_name: string } | null;
	source_account: { display_name: string } | null;
	next_path: string;
}

/** Describe a pending Create / Connect / Move / Merge for the confirm page. */
export async function getPending(token: string): Promise<PendingDescription> {
	const res = await fetch(`${FUNCTIONS_URL}/pending-action?token=${encodeURIComponent(token)}`);
	const data = await res.json().catch(() => ({}));
	if (!res.ok) throw new Error(data.error ?? 'This confirmation has expired');
	return data;
}

/** Confirm or cancel a pending action. Confirming a Create returns a redirect. */
export async function resolvePending(
	token: string,
	action: 'confirm' | 'cancel'
): Promise<{ ok?: boolean; redirect?: string; cancelled?: boolean }> {
	const res = await fetch(`${FUNCTIONS_URL}/pending-action`, {
		method: 'POST',
		headers: await softAuthHeaders(),
		body: JSON.stringify({ token, action })
	});
	const data = await res.json().catch(() => ({}));
	if (!res.ok) throw new Error(data.error ?? 'Action failed');
	return data;
}

/** Remove one of your secondary connections (the primary can't be removed). */
export async function removeConnection(source: Provider, remoteId: string) {
	const res = await fetch(`${FUNCTIONS_URL}/remove-connection`, {
		method: 'POST',
		headers: await authHeaders(),
		body: JSON.stringify({ source, remote_id: remoteId })
	});
	const data = await res.json().catch(() => ({}));
	if (!res.ok) throw new Error(data.error ?? 'Remove failed');
	return data;
}

export interface ConnectionSummary {
	key: string;
	source: Provider;
	remote_id: string;
	avatar_url: string | null;
	display_name: string | null;
	username: string | null;
	expires_at: string | null;
	updated_at: string;
	is_primary: boolean;
	starmium: { total: number; spent: number; available: number };
}

export interface MembershipSummary {
	patreon_user_id: string;
	tier_title: string;
	tier_amount_cents: number;
	patron_status: string | null;
	lifetime_support_cents: number;
	campaign_lifetime_support_cents: number;
	currently_entitled_amount_cents: number;
	last_synced: string;
}

export interface RedemptionSummary {
	id: string;
	product_name: string;
	download_key: string;
	primary_key: string;
	starmium: { connection_id: string; amount: number }[];
	redeemed_at: string;
	products: { title: string | null } | null;
}

export interface Me {
	profile: {
		id: string;
		display_name: string;
		avatar_url: string | null;
		primary_key: string;
		created_at: string;
	};
	is_admin: boolean;
	connections: ConnectionSummary[];
	memberships: MembershipSummary[];
	redemptions: RedemptionSummary[];
	starmium: number;
}

/** Signed-in user's profile, connections, starmium and redemptions. */
export async function getMe(): Promise<Me> {
	const res = await fetch(`${FUNCTIONS_URL}/me`, { headers: await authHeaders() });
	if (!res.ok) throw new Error('Not signed in');
	return res.json();
}

export async function setDisplayName(display_name: string) {
	const res = await fetch(`${FUNCTIONS_URL}/set-display-name`, {
		method: 'POST',
		headers: await authHeaders(),
		body: JSON.stringify({ display_name })
	});
	const data = await res.json();
	if (!res.ok) throw new Error(data.error ?? 'Save failed');
	return data;
}

export interface ClaimResult {
	ok: true;
	key: string;
	balance: number;
}

/** Claim a download key for a product, spending starmium. */
export async function claimKey(product: string): Promise<ClaimResult> {
	const res = await fetch(`${FUNCTIONS_URL}/claim-key`, {
		method: 'POST',
		headers: await authHeaders(),
		body: JSON.stringify({ product })
	});
	const data = await res.json();
	if (!res.ok) throw new Error(data.error ?? 'Claim failed');
	return data;
}

/** Public patron credits (display names + lifetime support, no private data). */
export async function getPatronCredits() {
	const { data, error } = await supabase.rpc('get_patron_credits');
	if (error) throw error;
	return data;
}

export async function signOut() {
	await supabase.auth.signOut();
}
