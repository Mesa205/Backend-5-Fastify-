

import facturaCtrl from "../controllers/Factura.controller.js";
import { verifyToken } from "../middlewares/auth.js";
import { upload } from "../middlewares/imgUpload.js";

const middlewares = (req, reply, done) => {
    verifyToken(req, reply, done)

}

const route = (fastify, opts, done) => {

    fastify.get("/", facturaCtrl.listAll);
    fastify.get("/:id", facturaCtrl.listById);

    fastify.post("/", { preValidation: [middlewares, upload.single("img")] }, facturaCtrl.create);
    fastify.delete("/:id", {preHandler:[middlewares]}, facturaCtrl.delete);
    fastify.put("/:id", { preValidation: [middlewares, upload.single("img")] }, facturaCtrl.update);



    done();
}



export default route;
