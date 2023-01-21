
import productCtrl from "../controllers/Product.controller.js";
import { verifyToken } from "../middlewares/auth.js";
import { upload } from "../middlewares/imgUpload.js";

const middlewares = (req, reply, done) => {
    verifyToken(req, reply, done)

}

const route = (fastify, opts, done)=>{

    fastify.get("/", productCtrl.listAll);
    fastify.get("/:id", productCtrl.listById)
    fastify.post("/", { preValidation: [middlewares, upload.single("img")] }, productCtrl.create);
    fastify.delete("/:id", {preHandler:[middlewares]}, productCtrl.delete);
    fastify.put("/:id", { preValidation: [middlewares, upload.single("img")] }, productCtrl.update);




    done();


}


export default route;
