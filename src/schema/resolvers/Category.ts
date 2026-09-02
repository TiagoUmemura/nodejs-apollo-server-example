type ProductsFilterInput = {
  onSale?: boolean;
  avgRating?: number;
};

export const categoryResolvers = {
  Query: {
    category: (
      _parent: unknown,
      { id }: { id: string },
      { db }: { db: any }
    ) => {
      return db.categories.find((cat: { id: string }) => cat.id === id)
    },

    //_parent is not used, but needed for parameter position
    productsByCategory: (
      _parent: unknown,
      { categoryId, filter }: { categoryId: string; filter?: ProductsFilterInput },
      { db }: { db: any }
    ) => {
      let products = db.products.filter(
        (product: { categoryId: string }) => product.categoryId === categoryId
      );

      if (filter) {
        if (filter.onSale === true) {
          products = products.filter((p: { onSale: boolean }) => p.onSale);
        }

        if (filter.avgRating !== undefined) {
          products = products.filter((p: { id: string }) => {
            const productReviews = db.reviews.filter(
              (r: { productId: string }) => r.productId === p.id
            );
            if (productReviews.length === 0) return false;

            const avg =
              productReviews.reduce(
                (sum: number, r: { rating: number }) => sum + r.rating,
                0
              ) / productReviews.length;

            return avg >= filter.avgRating!;
          });
        }
      }
      return products;

    },
  },
};