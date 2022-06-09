import express, { Express, Request, Response } from "express";

const app: Express = express();

function logger(req: Request, res: Response) {
  const name: string = req.params.name;

  console.log(`${name} logged in`);

  res.status(200).send(`<p style='text-align: center'> ${name} logged in </p>`);
}

function welcome(req: Request, res: Response) {
  res.status(200).send(`<p style='text-align: center'> welcome </p>`);
}

app.get("/:name", logger);
app.get("/", welcome);

export default app;
