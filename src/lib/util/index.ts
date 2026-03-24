export function asciifySimple(text:string):string {
    return text.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x00-\x7F]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/[ _-]+/g, '-')
    .replace(/^-+|-+$/g, '')
};

export const sleep = (ms:number):Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

export function escapeRegExp(string:string):string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
