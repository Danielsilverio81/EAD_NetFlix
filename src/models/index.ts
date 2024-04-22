import { Category } from './Category'
import { Course } from './Course'
import { Episode } from './Episode'

Category.hasMany(Course)
Course.hasMany(Episode)
Course.belongsTo(Category)
Episode.belongsTo(Course)


export {
  Course,
  Category,
  Episode
}