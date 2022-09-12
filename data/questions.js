import { data } from "./data.js";
import { question } from "../models/model.js";

export const questions = data.map(element => new question(element.sentence, element.choices, element.answer));
