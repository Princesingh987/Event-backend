// import express from "express";
// import { dbConnection } from "./database/dbConnection.js";
// import dotenv from "dotenv";
// import messageRouter from "./router/messageRouter.js";
// import cors from "cors";

// const app = express();

// dotenv.config({ path: "./config/config.env" });

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["POST"],
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1/message", messageRouter);

// dbConnection();

// export default app;



// import express from "express";
// import { dbConnection } from "./database/dbConnection.js";
// import dotenv from "dotenv";
// import messageRouter from "./router/messageRouter.js";
// import cors from "cors";

// const app = express();

// // Load environment variables
// dotenv.config({ path: "./config/config.env" });

// // Middleware
// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use("/api/v1/message", messageRouter);

// // Health check route
// app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });

// // Connect to DB
// dbConnection();

// export default app;


import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

// Load env vars
dotenv.config({ path: "./config/config.env" });

// ✅ Fix CORS for both development & production
app.use(
  cors({
    origin: [
      "http://localhost:5173",  // Vite frontend (dev)
      "https://event-planning-application.netlify.app" // Netlify frontend (prod)
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/message", messageRouter);

// DB connection
dbConnection();

export default app;
