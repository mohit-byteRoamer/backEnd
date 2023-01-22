import { Router } from "express";
import { signUp, signIn } from "../controller/user-controller.js";
let api = Router();

api.post("/signUp", signUp);
api.post("/signIn", signIn);

export default api;
