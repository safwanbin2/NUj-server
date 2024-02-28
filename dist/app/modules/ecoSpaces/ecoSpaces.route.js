"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcoSpaceRouter = void 0;
const express_1 = require("express");
const validateRequest_1 = require("../../middlewares/validateRequest");
const ecoSpaces_validation_1 = require("./ecoSpaces.validation");
const ecoSpaces_controller_1 = require("./ecoSpaces.controller");
const router = (0, express_1.Router)();
// creating eco space
router.post("/create-eco-space", (0, validateRequest_1.validateRequest)(ecoSpaces_validation_1.EcoSpaceValidations.createEcoSpaceValidation), ecoSpaces_controller_1.EcoSpaceControllers.createEcoSpace);
// getting recent ecospace
router.get("/recent-eco-spaces", ecoSpaces_controller_1.EcoSpaceControllers.getRecentEcoSpaces);
exports.EcoSpaceRouter = router;
