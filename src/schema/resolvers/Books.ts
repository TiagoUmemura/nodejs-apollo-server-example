interface Book {
  id: string;
  title: string;
  author: string;
}

const books: Book[] = [
  { id: "1", title: "The Awakening", author: "Kate Chopin" },
  { id: "2", title: "City of Glass", author: "Paul Auster" },
];

export const bookResolvers = {
  Query: {
    books: (): Book[] => books,

    book: (_: unknown, args: { id: string }): Book | undefined => {
      return books.find((book) => book.id === args.id);
    },
  },
};
