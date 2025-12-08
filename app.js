import express from "express";
import "dotenv/config";
import router from "./routers/routers";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 pattounes app started at http://localhost:${PORT}`);
});
