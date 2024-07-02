# FigureOne Skates Backend

## REST API Specification

- Production: `https://figureoneskates-backend.mailfaruqi.com`
- Local: `http://localhost:3000`

Products:

| Endpoint        | HTTP     | Description          |
| --------------- | -------- | -------------------- |
| `/products`     | `GET`    | Get all products     |
| `/products/:id` | `GET`    | Get product by id    |
| `/products`     | `POST`   | Add new product      |
| `/products`     | `DELETE` | Delete all products  |
| `/products/:id` | `DELETE` | Delete product by id |
| `/products/:id` | `PUT`    | Update product by id |

Auth:

| Endpoint           | HTTP     | Permission    |
| ------------------ | -------- | ------------- |
| `/users`           | `GET`    | Public        |
| `/users/:username` | `GET`    | Public        |
| `/auth/register`   | `POST`   | Public        |
| `/auth/login`      | `POST`   | Public        |
| `/auth/me`         | `GET`    | Authenticated |
| `/auth/logout`     | `POST`   | Authenticated |
| `/cart`            | `GET`    | Authenticated |
| `/cart/items`      | `POST`   | Authenticated |
| `/cart/items/:id`  | `DELETE` | Authenticated |
| `/cart/items/:id`  | `PUT`    | Authenticated |

## Getting Started

To install dependencies:

```sh
bun install
```

## Prisma Setup

You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:

1. Set the required variables in the `.env` file, form the `.env.example`
2. Run `docker compose up -d` to run database in local Docker container
3. Run `bun prisma migrate deploy` to apply migration
4. Run `bun prisma db seed` to seed initial data
5. Run `bun prisma generate` to generate the Prisma Client. You can then start querying your database.

## Development

To run:

```sh
bun dev
```

## Deployment

To run:

```sh
bun start
```

Open <http://localhost:3000>
