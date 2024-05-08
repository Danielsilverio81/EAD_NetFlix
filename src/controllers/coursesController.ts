import { Request, Response } from "express";
import { courseService } from "../services/CourseService";

export const coursesController = {
  //GET /courses/featured
  featured: async (req: Request, res: Response) => {
    try {
     
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  // GET /courses/:id
  show: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const course = await courseService.findByIdWithEpisodes(id);
      return res.json(course);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
