import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTours,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "./../Controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", verifyAdmin, createTour);
router.put("/:id", verifyAdmin, updateTour);
router.delete("/:id", verifyAdmin, deleteTour);
router.get("/:id", getSingleTour);
router.get("/", getAllTour);
router.get("/search/getToursBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTours);
router.get("/search/getTourCount", getTourCount);

export default router;
