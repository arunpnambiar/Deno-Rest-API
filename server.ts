
import app from './Router/app.ts'

const port:any = Deno.env.get("PORT") || 8000
console.log("http://localhost/",port)
await app.listen({ port: port})