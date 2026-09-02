\*\* About

Simple nodejs with Apollo. Contains book endpoint example:

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

```

run npm run dev:start (start server localhost:4000)
