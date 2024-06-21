import express from "express";
import BackgroundController from "./controllers/backgroundController";
import WeatherController from './controllers/weatherController'
import LocationController from "./controllers/locationController";

const router = express.Router();

const backgroundController = new BackgroundController();
const weatherController = new WeatherController();
const locationController = new LocationController();

router.get('/background', backgroundController.getBackgroundImage)
router.get('/weather', weatherController.getWeather)
router.get('/location', locationController.getLocation)

export default router;