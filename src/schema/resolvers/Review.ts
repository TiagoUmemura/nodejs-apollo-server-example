export const reviewResolvers = {
    Query: {
        reviews: (
            _parent: unknown,
            { id }: { id: string },
            { db }: { db: any }
        ) => {
            return db.reviews
        },
    }
}