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

/** Start OAuth with a provider. Returns the provider's authorize URL. */
export async function oauthStart(provider: Provider, next = '/connect'): Promise<string> {
	const res = await fetch(`${FUNCTIONS_URL}/oauth-start`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
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

/** itch.io hands its token back in the URL fragment; forward it to the backend. */
export async function linkItchio(accessToken: string, state: string) {
	const res = await fetch(`${FUNCTIONS_URL}/itchio-link`, {
		method: 'POST',
		headers: await authHeaders(),
		body: JSON.stringify({ access_token: accessToken, state })
	});
	const data = await res.json().catch(() => ({}));
	if (!res.ok) throw new Error(data.error ?? 'Link failed');
	return data;
}

export interface ConnectionSummary {
	source: 'patreon' | 'itchio';
	remote_id: string;
	avatar_url: string | null;
	display_name: string | null;
	username: string | null;
	expires_at: string | null;
	updated_at: string;
}

export interface Me {
	profile: {
		id: string;
		display_name: string;
		avatar_url: string | null;
		is_admin: boolean;
		created_at: string;
	};
	connections: ConnectionSummary[];
	membership: {
		tier_title: string;
		tier_amount_cents: number;
		patron_status: string | null;
		lifetime_support_cents: number;
	} | null;
	keys: { key: string; claimed_at: string; products: { name: string; title: string } }[];
	starmium: number;
	starmium_sources: { source_key: string; balance: number }[];
}

/** Signed-in user's profile, starmium balance and patron status. */
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
