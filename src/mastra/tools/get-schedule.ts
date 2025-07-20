import { createTool } from "@mastra/core/tools";
import { z } from "zod";

// Define the handler for the rateup tool
const getVets = async (location: string) => {
  // Replace with an actual API call to a weather service
  console.log(`Fetching rateup vets for ${location}...`);
  // Example data structure
  return [
    { vet_name: "Dr Niwa", hospital_name: "CityPet", speciality: "Surgery" },
    {
      vet_name: "Dr Padeniya",
      hospital_name: "Pet Central",
      speciality: "Surgery",
    },
    { vet_name: "Dr Malik", hospital_name: "CityPet", speciality: "Surgery" },
  ];
};

// Define a tool for retrieving weather information
export const getVetsTool = createTool({
  id: "Get Vet Information",
  description: `Fetches the information Vets with for a given city`,
  inputSchema: z.object({
    location: z.string().describe("Location name"),
  }),
  outputSchema: z.array(
    z.object({
      vet_name: z.string(),
      hospital_name: z.string(),
      speciality: z.string().describe("speciality of Vet"),
    })
  ),
  execute: async ({ context: { location } }) => {
    console.log("Using tool to fetch weather information for", location);
    return await getVets(location);
  },
});
