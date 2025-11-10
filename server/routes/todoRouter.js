import { pool } from "../helper/db.js"
import { Router } from "express"
import { auth } from "../helper/auth.js"
import { getTasks, postTask, deleteTaskById } from "../controllers/TaskController.js"


const router = Router()


router.get("/", getTasks)
router.post("/create", postTask)
router.delete("/delete/:id", deleteTaskById)

/*
router.get("/", (req, res, next) => {
  pool.query("SELECT * FROM task", (err, result) => {
    if (err) {
      return next(err)
    }
    res.status(200).json(result.rows)
  })
})


// Other routes (create, delete) here
router.post("/create", auth,(req, res, next) => {
  //const pool = openDb()
  const { task } = req.body

  if (!task) {
    const error = new Error("Task is required")
    error.status = 400
    return next(error)
  }

  pool.query(
    "insert into task (description) values ($1) returning *",
    [task.description],
    (err, result) => {
      if (err) {
        return next(err)
      }
      res
        .status(201)
        .json({ id: result.rows[0].id, description: task.description })
    }
  )
})


router.delete("/delete/:id", (req, res, next) => {
  //const pool = openDb()
  const { id } = req.params

  console.log(`Deleting task with id: ${id}`);
  pool.query("delete from task WHERE id = $1", [id], (err, result) => {
    if (err) {
      console.error(err.message)
      return next(err)
    }
    if (result.rowCount === 0) {
        const error = new Error("Task not found")
        return next(error)
    }
    return res.status(200).json({ id: id })
  })
})
*/

export default router
