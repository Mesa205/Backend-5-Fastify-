
import categoryCtrl from "../controllers/Category.controller.js";
import { verifyToken } from "../middlewares/auth.js";
import { upload } from "../middlewares/imgUpload.js";

const middlewares = (req, reply, done) => {
    verifyToken(req, reply, done)

}

const route = (fastify, opts, done) => {
    fastify.get("/", categoryCtrl.listAll);
    fastify.get("/:id", categoryCtrl.listById)
    fastify.post("/", { preValidation: [middlewares, upload.single("img")] }, categoryCtrl.create);
    fastify.delete("/:id", {preHandler:[middlewares]}, categoryCtrl.delete);
    fastify.put("/:id", { preValidation: [middlewares, upload.single("img")] }, categoryCtrl.update);




    done();
}

export default route;
