import http from "http";
import app from "./app";
import connectDB from "./db/db";

const port: number = 4000;
const server = http.createServer(app);

server.listen(port, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});
