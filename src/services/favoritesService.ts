import { Favorite } from "../models/Favorites";

export const favoriteService = {
  create: async (userId: number, courseId: number) => {
    const favorite = Favorite.create({
      courseId,
      userId,
    });
    return favorite
  },
};
