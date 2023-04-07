const express = require("express");
const SendWeatherInfo = require("../../application/usecases/sendWeatherInfo");
const EmailService = require("../../infrastructure/emailService");
const WeatherAPI = require("../../infrastructure/weatherAPI");
const LogWeatherInfo = require("../../application/usecases/logWeatherInfo");
require("dotenv").config();

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("/public/index.html");
});

router.post("/sendWeatherInfo", async (req, res) => {
  const { city } = req.body;
  const logWeatherInfo = new LogWeatherInfo({
    weatherAPI: new WeatherAPI(process.env.API_KEY),
  });
  try {
    const result = await logWeatherInfo.execute({ city: city });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
  // const sendWeatherInfo = new SendWeatherInfo({
  //   emailService: new EmailService({
  //     emailUser: process.env.EMAIL_USER,
  //     emailPass: process.env.EMAIL_PASS,
  //   }),
  // });
  // try {
  //   const result = await sendWeatherInfo.execute({ email, city });
  //   res.send(result);
  // } catch (error) {
  //   res.status(500).send(error.message);
  // }
});

module.exports = router;
