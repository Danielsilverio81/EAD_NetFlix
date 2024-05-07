import { Category } from './Category'
import { Course } from './Course'
import { Episode } from './Episode'
import {User} from './User'

Category.hasMany(Course, { as: 'courses' })
Course.hasMany(Episode)
Course.belongsTo(Category)
Episode.belongsTo(Course)


export {
  Course,
  Category,
  Episode,
  User
}