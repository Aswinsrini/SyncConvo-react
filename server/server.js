import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import OpenAI from 'openai';
import { createReadStream } from 'fs';;
dotenv.config();
// console.log(process.env.OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from CodeX!",
  });
});

app.post("/", async (req, res) => {
  try {
    // const audio = await openai.audio.transcriptions.create({
    //   model: 'whisper-1',
    //   file: createReadStream('harvard.wav'),
    // });
    // console.log(audio);

    const prompt = req.body.prompt;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{'role': 'user', 'content': `${prompt}`}],
      max_tokens:1000,
      // temperature : 0,
      // stream:true,
    });
    // console.log(response.choices[0].message);
    res.status(200).send({
      bot: response.choices[0].message,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error || "Something went wrong");
  }
});

app.listen(5000, () =>
  console.log("AI server started on http://localhost:5000")
);
