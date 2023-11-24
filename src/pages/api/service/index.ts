import type { APIRoute } from "astro";
import { Service } from "../../../db/models/service";

export const GET: APIRoute = async ({ params, request }) => {

  const response= await Service.findAll({
    attributes: ["serviceID", "serviceName", "serviceDescription"]
  });

  return new Response(JSON.stringify(response));
};
