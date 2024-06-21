import express from "express";
import BackgroundController from "./controllers/backgroundController";
import WeatherController from './controllers/weatherController'

const router = express.Router();

const backgroundController = new BackgroundController();
const weatherController = new WeatherController();

router.get('/background', backgroundController.getBackgroundImage)
router.get('/weather', weatherController.getWeather)

export default router;