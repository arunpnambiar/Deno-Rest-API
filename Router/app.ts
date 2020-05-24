import {Application } from "https://deno.land/x/oak/mod.ts";
import productRouter from './productRouter.ts'
import orderRouter from './orderRouter.ts'
const app = new Application()
/**
 * routers
 */
app.use(productRouter.routes())
app.use(productRouter.allowedMethods())
app.use(orderRouter.routes())
app.use(orderRouter.allowedMethods())

export default app