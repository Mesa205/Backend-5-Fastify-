import formBody from '@fastify/formbody';
import multer from 'fastify-multer';
import Fastify from 'fastify'
import cors from "@fastify/cors";
// importacion de rutas
import usersRoutes from "./routes/user.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import productRoutes from "./routes/product.routes.js";
import facturaRoutes from "./routes/factura.routes.js";

const fastify = Fastify({
  logger: true
})

import { connectDb } from "./database.js";
connectDb();


fastify.register(cors, { origin: '*' });
fastify.register(formBody);
fastify.register(multer.contentParser);


fastify.register(usersRoutes, { prefix: "/user" });
fastify.register(categoryRoutes, { prefix: "/category" });
fastify.register(productRoutes, { prefix: "/product" });
fastify.register(facturaRoutes, { prefix: "/factura" });


const start = async () => {
  try {
    await fastify.listen({ port: 4000, host: "0.0.0.0" });
    console.log("escuchando por el puerto 4000")
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()





