import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

{/*write code for cors*/}
app.use(cors());
app.get("/", (req, res) => {
    res.send("Welcome to the Quote Generator API");
});

{/*write code to define routes*/}


{/*write code to create server*/}
const app=express();
const port =3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});