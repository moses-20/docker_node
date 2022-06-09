import request from "supertest";
import app from ".";

describe("GET request to /", function () {
  const agent = request.agent(app);

  test("it should respond with status code of 200", async function () {
    const response = await agent.get("/");

    expect(response.statusCode).toBe(200);
  });

  test("it should respond with welcome text", async function () {
    const response = await agent.get("/");

    expect(response.text).toEqual(
      `<p style='text-align: center'> welcome </p>`
    );
  });

  test("it should log user to the console", async function () {
    const consoleSpy = jest.spyOn(console, "log");
    await agent.get("/moses");

    expect(consoleSpy).toBeCalledTimes(1);

    await agent.get("/sarah");
    expect(consoleSpy).toBeCalledTimes(2);
  });

  test("it should log user name to the console", async function () {
    const consoleSpy = jest.spyOn(console, "log");
    await agent.get("/moses");

    expect(consoleSpy).toBeCalledWith("moses logged in");
  });
});
