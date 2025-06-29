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
exports.getTypeTechOnboardingController = void 0;
const technicalOnboarding_service_1 = require("../services/technicalOnboarding.service");
const getTypeTechOnboardingController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getType = yield (0, technicalOnboarding_service_1.getTypeTechOnboardingService)();
        res.status(201).json(getType);
    }
    catch (error) {
        res.status(400).json({
            message: "Ocurrio un error al procesar la solicitud",
            error: error,
        });
    }
});
exports.getTypeTechOnboardingController = getTypeTechOnboardingController;
