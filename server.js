const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const{Configuration, OpenAIApi} = require ("openai");
const config1 = new Configuration(
{
  apiKey: "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"
});

const openai = new OpenAIApi(config1)

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.post("/chat", async (req,res)=>
{
    const {prompt} = req.body;

    const completion = await openai.createCompletion(
        {
            model: "gpt-3.5-turbo-1106",
            max_tokens: 512,
            temperature: 0,
            prompt: prompt,
        });
            res.send(completion.data.choices[0].text)


        
    });
    const POST = 8020;
    app.listen(PORT, ()=>{
        console.log('Server running on the port : ${PORT}')});
