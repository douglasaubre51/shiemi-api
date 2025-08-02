import express from "express"

import { UpdateDeveloperMode } from "../controllers/settings.controller.js"


export const settingsRouter = express.Router();

settingsRouter.put(
    "/settings/dev-mode/:userId",
    UpdateDeveloperMode
)