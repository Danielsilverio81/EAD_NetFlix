import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./Episode";
import { Favorite } from "./Favorites";
import { User } from "./User";

Category.hasMany(Course, { as: "courses" });

Course.belongsTo(Category);
Course.hasMany(Episode, { as: "episodes" });
Course.hasMany(Favorite, { as: "favoriteUsers", foreignKey: "course_id" });
Course.belongsToMany(User, { through: Favorite });

Episode.belongsTo(Course);

Favorite.belongsTo(Course);
Favorite.belongsTo(User);

User.belongsToMany(Course, { through: Favorite });
User.hasMany(Favorite, { as: "favoriteCourses", foreignKey: "user_id" });

export { Course, Category, Episode, User };
