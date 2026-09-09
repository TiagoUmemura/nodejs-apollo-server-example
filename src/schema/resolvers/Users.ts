import { pool } from "../../pg-db";
import type { User, UserRow } from "../../types.js";
 
function toUser(row: UserRow): User {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    createdAt: row.created_at,
  };
}
 
export const usersResolvers = {
  Query: {
    users: async (): Promise<User[]> => {
      const { rows } = await pool.query<UserRow>(
        "SELECT id, name, email, created_at FROM users ORDER BY id"
      );
      return rows.map(toUser);
    },
    user: async (
      _parent: unknown,
      args: { id: string }
    ): Promise<User | null> => {
      const { rows } = await pool.query<UserRow>(
        "SELECT id, name, email, created_at FROM users WHERE id = $1",
        [args.id]
      );
      return rows.length ? toUser(rows[0]) : null;
    },
  },
};
 