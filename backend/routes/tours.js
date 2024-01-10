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
const router = express.Router();

router.post("/", createTour);
router.put("/:id", updateTour);
router.delete("/:id", deleteTour);
router.get("/:id", getSingleTour);
router.get("/", getAllTour);
router.get("/search/getToursBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTours);
router.get("/search/getTourCount", getTourCount);

export default router;
