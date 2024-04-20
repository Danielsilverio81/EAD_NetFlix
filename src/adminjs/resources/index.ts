import { ResourceWithOptions } from "adminjs";
import { Category, Course } from "../../models";
import { categoryResourcesOptions } from "./Category";
import { courseResourceOptions } from "./Course";

export const adminjsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourcesOptions,
    },
    {
        resource: Course,
        options: courseResourceOptions,
    }
];
