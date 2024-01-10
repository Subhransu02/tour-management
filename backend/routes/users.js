import express from "express"
const router = express.Router()

import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js"

router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getSingleUser)
router.get("/", getAllUser)
export default router;