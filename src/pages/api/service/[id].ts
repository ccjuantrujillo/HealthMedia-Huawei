import type { APIRoute } from "astro";
import { Service } from "../../../db/models/service";

export async function getStaticPaths() {
  const paths = [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
  ];
  return paths;
}

export const GET: APIRoute = async ({ params, request }) => {
  const serviceID = params.id;

  const response= await Service.findAll({
    raw: true,
    attributes: ["serviceID", "serviceName", "serviceDescription"],
    where: {
      serviceID,
    },
  });

  return new Response(JSON.stringify(response));
};
