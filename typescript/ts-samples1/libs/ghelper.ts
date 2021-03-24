export function removeTags(s:string):string {
    return String(s).replace(/<[a-zA-Z\/][^<>]*>/g, '');
} 