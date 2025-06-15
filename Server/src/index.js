import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./lib/connectDB.js";
import authRoute from "./Routes/auth.route.js"
import applyJobsRoute from "./Routes/applyJobs.route.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true,  
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],   
    allowedHeaders: ["Content-Type", "Authorization"],  
}))

app.use("/auth", authRoute); 
app.use("/apply", applyJobsRoute);

app.listen(port, ()=>{
    console.log(`Server is working on port ${port}`);
    connectDB();
})