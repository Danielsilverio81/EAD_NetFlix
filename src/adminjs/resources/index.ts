import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode } from "../../models";
import { categoryResourcesOptions } from "./Category";
import { courseResourceOptions } from "./Course";
import { episodeResourceOptions } from "./Episode";

export const adminjsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourcesOptions,
    },
    {
        resource: Course,
        options: courseResourceOptions,
    },
    {
        resource: Episode,
        options: episodeResourceOptions,
    },
];
