const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("¡Hola, DevOps con CI/CD!");
});

describe("Pruebas del servidor", () => {
  test("Debe responder con '¡Hola, DevOps con CI/CD!'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("¡Hola, DevOps con CI/CD!");
  });
});
