import AdminJS, { PageHandler } from "adminjs"
import { Category, Course, Episode, User } from "../models"

export const dashboardOptions: {
    handler?:PageHandler
    component?: string
} = {
    component: AdminJS.bundle("./components/Dashboard.tsx"),
    handler: async (req, res, context) => {
        const course = await Course.count()
        const episodes = await Episode.count()
        const categories = await Category.count()
        const standardUsers = await User.count({ where: {role: 'user' } })

        res.json({
            'Cursos': course,
            'Episódios': episodes,
            'Categorias': categories,
            'Usuários': standardUsers
        })
    }
}