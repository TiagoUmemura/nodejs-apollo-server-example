const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
    category(id: ID!): Category
    productsByCategory(categoryId: ID!, filter: ProductsFilterInput): [Product]
    reviews: [Review]
  }

  type Mutation {
    updateCategory(id: ID!, input: CategoryInput): Category
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews: [Review!]!
  }

   type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input CategoryInput {
    name: String!
  }
`;

export default typeDefs;
