"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralServices = void 0;
const AppError_1 = require("../../errors/AppError");
const ecoSpaces_model_1 = require("../ecoSpaces/ecoSpaces.model");
const user_model_1 = require("../users/user.model");
// Getting my profile
const getMyProfileFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.findOne({ email });
    if (!(result === null || result === void 0 ? void 0 : result._id)) {
        throw new AppError_1.AppError(400, "User does not exists");
    }
    return result;
});
// Getting statistics for admin
const getStatisticsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const ecoSpacesCount = yield ecoSpaces_model_1.EcoSpaceModel.countDocuments({});
    const usersCount = yield user_model_1.UserModel.countDocuments({ role: "user" });
    const subscribersCount = yield ecoSpaces_model_1.EcoSpaceModel.countDocuments({
        plan: { $exists: true },
    });
    const revenue = yield ecoSpaces_model_1.EcoSpaceModel.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$planPrice" },
            },
        },
    ]);
    const result = {
        ecoSpacesCount,
        usersCount,
        subscribersCount,
        revenue: revenue[0].totalRevenue,
    };
    return result;
});
exports.GeneralServices = {
    getStatisticsFromDB,
    getMyProfileFromDB,
};
