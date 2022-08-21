import express from "express";
import cors from "cors";
import router from "./router/app.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
const PORT = 5000; 

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))