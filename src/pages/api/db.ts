import type { APIRoute } from "astro";
import { sequelize } from "../../db/db";

export const GET: APIRoute = async ({ params, request }) => {
  await sequelize.authenticate();

  const responseFromDb = {
    user: {
      name: "John",
      lastname: "Doe",
      age: 30,
    },
  };
  return new Response(JSON.stringify(responseFromDb));
};
