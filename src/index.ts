import { Hono } from "hono";
import { cors } from "hono/cors";

import { prisma } from "./libs/db";

const app = new Hono();

app.use("/*", cors());

app.get("/", (c) => {
  return c.json({
    message: "FigureOne Skates Backend API",
    products: "/products",
  });
});

app.get("/products", async (c) => {
  const products = await prisma.product.findMany();
  return c.json(products);
});

// | `/users`           | `GET`    | Public        |
// | `/users/:username` | `GET`    | Public        |
// | `/auth/register`   | `POST`   | Public        |
// | `/auth/login`      | `POST`   | Public        |
// | `/auth/me`         | `GET`    | Authenticated |
// | `/auth/logout`     | `POST`   | Authenticated |

app.get("/users", async (c) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
    },
  });
});

export default app;
