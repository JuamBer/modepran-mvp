import { GoogleGenAI } from "@google/genai";
import { Animal } from "../types";

const apiKey = process.env.API_KEY || '';
// Note: In a real production app, we would handle missing API keys more gracefully
// or via a backend proxy. For this demo, we assume it's injected.

const ai = new GoogleGenAI({ apiKey });

export const generateAnimalStory = async (animal: Animal): Promise<string> => {
  if (!apiKey) return "La historia de este animal se está escribiendo...";

  try {
    const prompt = `
      Actúa como un voluntario empático de la protectora Modepran en Valencia.
      Escribe una historia breve, emotiva pero honesta (máximo 80 palabras) para fomentar la adopción de este animal:
      Nombre: ${animal.name}
      Especie: ${animal.species}
      Raza: ${animal.breed}
      Edad: ${animal.ageText}
      Estado: ${animal.status}
      Historial: ${animal.timeline.map(t => t.title).join(', ')}
      Notas médicas: ${animal.medical.healthNotes}
      Descripción base: ${animal.description}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || animal.description;
  } catch (error) {
    console.error("Error generating story:", error);
    return animal.description;
  }
};

export const askAboutAnimal = async (animal: Animal, question: string): Promise<string> => {
  if (!apiKey) return "Lo siento, no puedo responder en este momento.";

  try {
    const prompt = `
      Eres un asistente virtual de Modepran. Estás respondiendo a un posible adoptante sobre el animal ${animal.name}.
      Usa la siguiente información para responder:
      ${JSON.stringify(animal)}
      
      Pregunta del usuario: "${question}"
      
      Responde de forma amable, profesional y concisa. Si no sabes la respuesta, invita a visitar el centro.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Por favor contáctanos para más detalles.";
  } catch (error) {
    console.error("Error answering question:", error);
    return "Hubo un error al procesar tu pregunta.";
  }
};
