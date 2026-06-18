import "../docs";
import {
  OpenApiGeneratorV3,
} from "@asteasolutions/zod-to-openapi";

import { registry } from "../docs/registry";

const generator =
  new OpenApiGeneratorV3(
    registry.definitions
  );

export const openApiDocument =
  generator.generateDocument({
    openapi: "3.0.0",

    info: {
      title: "PLP API",
      version: "1.0.0",
      description:
        "Node.js + Express + TypeScript API",
    },

    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  });