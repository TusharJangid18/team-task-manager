
import express from "express";
import Task from "../models/Task.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", protect, async(req,res)=>{
  const tasks = await Task.find();
  const overdue = tasks.filter(t => new Date(t.dueDate) < new Date());
  res.json({
    total: tasks.length,
    todo: tasks.filter(t=>t.status==="To Do").length,
    progress: tasks.filter(t=>t.status==="In Progress").length,
    done: tasks.filter(t=>t.status==="Done").length,
    overdue: overdue.length
  });
});

export default router;
