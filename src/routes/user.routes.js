
import userCtrl from "../controllers/user.controller.js";

const route = (fastify, opts, done) => {

    fastify.post("/register", userCtrl.register);
    fastify.post("/login", userCtrl.login);

    done();
}


export default route;
