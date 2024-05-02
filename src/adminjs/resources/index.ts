import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode } from "../../models";
import { categoryResourcesOptions } from "./Category";
import { courseResourceFeatures, courseResourceOptions } from "./Course";
import { episodeResourcefeatures, episodeResourceOptions } from "./Episode";

export const adminjsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourcesOptions,
    },
    {
        resource: Course,
        options: courseResourceOptions,
        features: courseResourceFeatures
    },
    {
        resource: Episode,
        options: episodeResourceOptions,
        features: episodeResourcefeatures
    },
];
