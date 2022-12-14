const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/languages", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios(
      "https://g-translate1.p.rapidapi.com/languages",
      options
    );
    const arrayOfData = Object.keys(response.data.data).map(
      (key) => response.data.data[key]
    );
    res.status(200).json(arrayOfData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

app.get("/translation", async (req, res) => {
  const { textToTranslate, outputLanguage, inputLanguage } = req.query;

  const options = {
    method: "GET",
    params: {
      text: textToTranslate,
      tl: outputLanguage,
      sl: inputLanguage,
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios(
      "https://g-translate1.p.rapidapi.com/translate",
      options
    );
    res.status(200).json(response.data.data.translation);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("server running on: " + PORT));
