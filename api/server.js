const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());

// Import Routes
const apiRoutes = require("./routes");

// Use Routes
app.use("/", apiRoutes);

// Start the Server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

module.exports = app;
