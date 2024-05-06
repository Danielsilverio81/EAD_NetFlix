import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminjsResources } from "./resources";
import { Category, Course, Episode, User } from "../models";
import bcrypt from "bcrypt";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentication";

AdminJS.registerAdapter(AdminJSSequelize);

export const adminjs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: adminjsResources,
  branding: brandingOptions,
  locale: locale,
  dashboard: dashboardOptions,
});

export const adminjsRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminjs,
  authenticationOptions,
  null,
  {
    resave: false,
    saveUninitialized: false,
  }
);
