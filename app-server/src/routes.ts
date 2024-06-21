import express from "express";
import BackgroundController from "./controllers/backgroundController";

const router = express.Router();

const backgroundController = new BackgroundController();

router.get('/background', backgroundController.getBackgroundImage)

export default router;