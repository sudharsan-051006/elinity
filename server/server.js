const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { google } = require("googleapis");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ---- GOOGLE AUTH ----
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// ---- ROUTE ----
app.post("/api/waitlist", async (req, res) => {
  console.log("Incoming request:", req.body);

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Missing name or email" });
  }

  try {
    // 1️⃣ Get existing emails from sheet
    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Sheet1!A:C",  // 🔁 Make sure this matches your tab name
    });

    const rows = existingData.data.values || [];

    // 2️⃣ Check if email already exists
    const emailExists = rows.some(
      (row) => row[1] && row[1].toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      return res.status(409).json({ error: "Email already on waitlist." });
    }

    // 3️⃣ Append new row
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Sheet1!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, new Date().toISOString()]],
      },
    });

    res.status(200).json({ success: true });

  } catch (error) {
    console.error("Google Sheets Error:", error);
    res.status(500).json({ error: "Failed to append to sheet" });
  }
});



// console.log("PRIVATE KEY:", process.env.GOOGLE_PRIVATE_KEY);
console.log("Spreadsheet ID:", process.env.SPREADSHEET_ID);
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});