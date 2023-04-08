const express = require('express');
const SendWeatherInfo = require('../application/usecases/sendWeatherInfo');
const EmailService = require('../infrastructure/emailService');
const WeatherAPI = require('../infrastructure/weatherAPI');
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('/public/index.html');
});

router.post('/sendWeatherInfo', async (req, res) => {
  const { email, city } = req.body;
  const logWeatherInfo = new LogWeatherInfo({
    weatherAPI: new WeatherAPI(process.env.API_KEY),
  });
  const sendWeatherInfo = new SendWeatherInfo({
    emailService: new EmailService(process.env.USER, process.env.PASS),
    weatherAPI: new WeatherAPI(process.env.API_KEY),
  });
  try {
    const result = await sendWeatherInfo.execute({ email, city });
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
