# About

Simple nodejs with Apollo. Contains book endpoint example and endpoint that get data from Postgres DB container

## How to run

- npm install
- In the folder src/pg-db run docker-compose up -d (start postgres container, port 5432)
  - Folder src/pg-db/init contains a seed sql that will run with docker-compose command
- npm run start:dev

## Endpoint examples

- Users endpoint gets the users list from Postgres.
- All other endpoints is using dummy data from a ts file. (src/database/db.ts)

```
localhost:4000/

query GetBooks {
    books {
        id
        title
        author
    }
}

query Category {
    category(id:"c01b1ff4-f894-4ef2-b27a-22aacc2fca70") {
        id
        name
    }
}

query ProductsByCategory {
  productsByCategory(
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
    filter: { onSale: true }
  ) {
    id
    name
    onSale
  }
}

query Reviews {
    reviews {
        id
        date
        title
        comment
        rating
    }
}

mutation UpdateCategory {
    updateCategory(
        id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
        input: { name: "test" }
    ) {
        id
        name
    }
}

POSTGRES Query

query Users {
    users {
        id
        name
        email
        createdAt
    }
}

```

run npm run dev:start (start server localhost:4000)
