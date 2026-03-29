import express from "express";
import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import mcpRouter from "./chatRouter";
import chatRouter from "./chatRouter";

const app = express();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello from server!!");
});

app.use("/mcp", mcpRouter);
app.use("/chat", chatRouter);

console.log(process.env.GEMINI_API_KEY!);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));