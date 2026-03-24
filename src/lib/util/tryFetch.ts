export default async (...params:Parameters<typeof fetch>)=>{
    try{
        return await fetch(...params);
    }catch(err){
        console.warn(`Failed to fetch: ${params[0]}`)
        return null;
    }
}