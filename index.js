const express = require("express");
const os = require("os");
require("dotenv").config();
const pincode = require("./pincode");
const { db } = require("./db");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

//connect to db
db();

app.get("/", (req, res) => {
  return res.json({ success: true, message: "the server is up and runing  " });
});
//get the pincode details by pincode
app.get("/api/pincode/:pincodeId", async (req, res) => {
  const pincodeId = req.params.pincodeId;
  res.send(
    await pincode.find({ pincode: pincodeId }).select({ _id: 0, __v: 0 })
  );
});
// get pincode detail's for by area
app.get("/api/pincode/area/:search", async (req, res) => {
  const search = req.params.search;

  res.send(
    await pincode.aggregate([
      {
        $match: {
          officename: {
            $regex: search,
            $options: "i",
          },
        },
      },
      { $unset: ["_id", "__v"] },
    ])
  );
});
// get pincode detail's for by district
app.get("/api/pincode/district/:search", async (req, res) => {
  const search = req.params.search;
  res.send(
    await pincode.aggregate([
      {
        $match: {
          Districtname: {
            $regex: search,
            $options: "i",
          },
        },
      },
      { $unset: ["_id", "__v"] },
    ])
  );
});

app.use("*", (req, res) => {
  res.status(404);
  return res.json({ success: false, error: "Invalid API call", data: {} });
});

app.listen(PORT, () => console.log(`server listening on ${PORT}`));
