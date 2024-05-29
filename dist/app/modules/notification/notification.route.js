"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRouter = void 0;
const express_1 = require("express");
const notification_controller_1 = require("./notification.controller");
const router = (0, express_1.Router)();
router.get("/create", notification_controller_1.NotificationController.createNotification);
router.get("/", notification_controller_1.NotificationController.getNotification);
router.post("/send-mail/", notification_controller_1.NotificationController.appointmentMail);
router.patch("/udpate/:email", notification_controller_1.NotificationController.updateNotification);
exports.NotificationRouter = router;
