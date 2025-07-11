import { OPENAI_KEY } from "./constants";
import { GoogleGenAI } from "@google/genai";

const openai = new GoogleGenAI({
  apiKey: OPENAI_KEY,
});

export default openai;
