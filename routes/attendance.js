import { Router } from "express";
import * as controllers from "../controllers/attendance.js"

const router = Router();

router.get("/", controllers.getattendances);
router.get("/:id", controllers.getAttendance);
router.get('/user/:userId', controllers.getAttendancesByUser);
router.get('/profile/:profilename', controllers.getAttendancesByProfileName);
router.post("/", controllers.createAttendance);
router.put("/:id", controllers.updateAttendance);
router.delete("/:id", controllers.deleteAttendance);

export default router;