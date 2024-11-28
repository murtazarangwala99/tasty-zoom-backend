const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());

// Import Routes
const apiRoutes = require("./routes");

// Use Routes
app.use("/", apiRoutes);

// Run the app locally if not in a serverless environment
if (require.main === module) {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running locally at http://localhost:${PORT}`);
  });
}

// Export the app for serverless environments (like Vercel)
module.exports = app;
