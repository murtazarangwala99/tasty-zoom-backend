const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

// Middleware to handle CORS
app.use(cors());

// Helper function to fetch data from any URL
const fetchData = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

// default
app.get("/", (req, res) => {
  res.json("Welcome to Tasty Zoom Restaurant");
});

// Route for fetching Swiggy data
app.get("/api/restaurants", async (req, res) => {
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  try {
    const data = await fetchData(url);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Swiggy API" });
  }
});

// *** Change accordingly only if cors issue is not given by the swiggy ***
// Route for fetching Restaurant Menu
app.get("/api/restaurantMenu", async (req, res) => {
  const url =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&restaurantId=100721";
  try {
    const data = await fetchData(url);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Example API" });
  }
});

// Route for a third API (add more as needed)
app.get("/api/third-api/info", async (req, res) => {
  const url = "https://api.thirdparty.com/info"; // Replace with another API URL
  try {
    const data = await fetchData(url);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Third-party API" });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
