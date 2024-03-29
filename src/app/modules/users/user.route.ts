import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserValidations } from "./user.validation";
import { UserControllers } from "./user.controller";

const router = Router();

import multer from "multer";
const storage = multer.diskStorage({});

const upload = multer({ storage });

// creating user
router.post(
  "/create-user",
  validateRequest(UserValidations.createUserValidation),
  UserControllers.createUser
);

// getting all users
router.get("/all", UserControllers.getAllUsers);

// getting single user by _id
router.get("/:userId", UserControllers.getSingleUser);

// updating user
router.put(
  "/update-user/:userId",
  validateRequest(UserValidations.updateUserValidation),
  UserControllers.updateUser
);

// updating isnotify
router.patch("/isnotify/:userId", UserControllers.updateNotify);

router.patch(
  "/update-image/:userId",
  upload.single("image"),
  UserControllers.updateImage
);

export const UserRouter = router;
