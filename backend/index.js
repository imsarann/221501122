import express from "express";
import { urlRouter } from "./router/index.js";

const app = express();
const PORT = 3000;
app.use(express.json())

app.use("/", urlRouter);

app.listen(PORT, ()=>{
    console.log(`Express is connected in http://localhost:${PORT}`);
})