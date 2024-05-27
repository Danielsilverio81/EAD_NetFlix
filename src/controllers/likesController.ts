import { Response } from "express";
import { AuthenticationRequest } from "../middlewares/auth";
import { likeService } from "../services/likeService";

export const likesController = {
    // POST /likes
    save: async (req: AuthenticationRequest, res: Response) => {
        const userId = req.user!.id;
        const { courseId } = req.body;

        try {
            const like = await likeService.create(userId, courseId);
            return res.status(201).json(like);
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },
};
