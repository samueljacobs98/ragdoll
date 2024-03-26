import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Ragdoll",
    description:
      "API documentation for an API demonstrating a RAG implementation",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000/",
      description: "Local server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/resources/*/*.yaml"],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec };
