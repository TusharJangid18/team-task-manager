
import express from "express";
import Project from "../models/Project.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, async(req,res)=>{
  const project = await Project.create({
    name:req.body.name,
    admin:req.user.id,
    members:[req.user.id]
  });
  res.json(project);
});

router.get("/", protect, async(req,res)=>{
  const projects = await Project.find({members:req.user.id});
  res.json(projects);
});

export default router;
