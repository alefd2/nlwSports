import express from "express";

const app = express();

app.get('/ads', (request, response) => {
    response.send("alef")
})

app.listen(3005);