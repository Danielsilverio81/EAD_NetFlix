import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode, User } from "../../models";
import { categoryResourcesOptions } from "./category";
import { courseResourceFeatures, courseResourceOptions } from "./course";
import { episodeResourcefeatures, episodeResourceOptions } from "./episode";
import { userResourceOptions } from "./user";

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
    {
        resource: User,
        options: userResourceOptions
    }
];
