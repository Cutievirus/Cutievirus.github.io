function getLocationParameters(s){
	const r = /[?&#]([^?&#=\r\n]+)=([^?&#=\r\n]+)/g;
	const p={};let m;while(m=r.exec(s)){ p[m[1]]=m[2]; }
	return p;
}
const params = getLocationParameters(location.href);
const url = new URL(location.href);
url.search=''; // strip search params. We aint php, we use hash here.
// these blacklisted keys are parameters I don't want staying in the
// url longer than necessary. They are mostly related to oauth.
let blacklisted_keys=["oauth","access_token","state"];
let hash = '#';
for (const key in params){
	if(blacklisted_keys.includes(key)){ continue; }
	const value = params[key];
	hash+=`${hash.length>1?'&':''}${key}=${value}`;
}
url.hash=hash;
location = url.toString();

if('oauth' in params){
	localStorage.setItem('itchio_access_token',params.access_token);
	fetch(`http://localhost:${params.state}/?provider=${params.oauth}&access_token=${params.access_token}`);
	vue.$data.messages.push("Your itch.io account has been linked successfully.");
}

const itchio_access_token = localStorage.getItem('itchio_access_token');

