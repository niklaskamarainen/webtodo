import { Router } from "express"
import { getTasks, postTask, deleteTaskById } from "../controllers/TaskController.js"


const router = Router()


router.get("/", getTasks)
router.post("/create", postTask)
router.delete("/delete/:id", deleteTaskById)

export default router
