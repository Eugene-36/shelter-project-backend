const express = require("express");
const router = express.Router();
const Animals = require("../../model/animals");


router.use((req, res, next) => {
  console.log(req.url);
  next();
});

router.get("/", async (req, res, next) => {
  try {
    const animals = await Animals.getAll();
    return res.json({ status: "success", code: 200, data: { animals } });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
