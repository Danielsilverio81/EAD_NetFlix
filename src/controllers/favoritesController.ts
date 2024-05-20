import { Response } from "express";
import { AuthenticationRequest } from "../middlewares/auth";
import { favoriteService } from "../services/favoritesService";

export const favoriteController = {
    // POST /favorites
    save: async (req: AuthenticationRequest, res: Response) => {
        const userId = req.user!.id
        const { courseId } = req.body

        try {
            const favorite = await favoriteService.create(userId, Number(courseId))
            return res.status(201).json(favorite)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
              }
        }
    }
}