import { Router } from "express";
import Hedgehog from "../models/Hedgehog.js";

const router = Router();

//Post new hedgehog
router.post("/", async (req, res, next) => {
  try {
    const newHedgehog = new Hedgehog(req.body);
    const data = await newHedgehog.save();
    res.json(data);
  } catch (error) {
    console.log(error);
    if ("name" in error && error.name === "ValidationError") {
      return res.status(400).json(error.errors);
    }
    return res.status(500).json(error.errors);
  }
});

//Get all hedgehogs
router.get("/", async (req, res, next) => {
  try {
    const query = req.query;
    const data = await Hedgehog.find(query);
    res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

//Get specific hedgehog
router.get("/:id", async (req, res, next) => {
  try {
    const data = await Hedgehog.findById(req.params.id);
    res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

//Delete a hedgehog
router.delete("/:id", async (req, res, next) => {
  try {
    const data = await Hedgehog.findByIdAndRemove(req.params.id, {});
    res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

//Update a hedgehog
router.put("/:id", async (req, res, next) => {
  try {
    const body = req.body;
    const data = await Hedgehog.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          sex: body.sex,
          color: body.color,
          eyeColor: body.eyeColor,
          sire: body.sire.toLowerCase(),
          dam: body.dam.toLowerCase(),
          dob: body.dob,
          dod: body.dod,
          breeder: body.breeder.toLowerCase(),
          owner: body.owner.toLowerCase()
        }
      },
      {
        new: true
      }
    );
    res.json(data);
  } catch (error) {
    console.log(error);
    if ("name" in error && error.name === "ValidationError") {
      return res.status(400).json(error.errors);
    }
    return res.status(500).json(error.errors);
  }
});

export default router;
