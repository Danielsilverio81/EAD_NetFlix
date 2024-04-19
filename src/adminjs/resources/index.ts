import { ResourceWithOptions } from "adminjs";
import { Category } from "../../models";
import { categoryResourcesOptions } from "./Category";

export const adminjsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourcesOptions,
    },
];
