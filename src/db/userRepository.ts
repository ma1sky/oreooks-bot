import { getPool } from "./index.js"

export type DbUser = {
  id: number
  telegram_id: string
  username: string | null
  first_name: string | null
  created_at: string
}

export async function upsertUser(params: {
  telegramId: string
  username?: string | null
  firstName?: string | null
}): Promise<DbUser> {
  const pool = getPool()
  const result = await pool.query<DbUser>(
    `
      INSERT INTO users (telegram_id, username, first_name)
      VALUES ($1, $2, $3)
      ON CONFLICT (telegram_id)
      DO UPDATE SET
        username = EXCLUDED.username,
        first_name = EXCLUDED.first_name
      RETURNING id, telegram_id, username, first_name, created_at
    `,
    [params.telegramId, params.username ?? null, params.firstName ?? null]
  )

  const user = result.rows[0]
  if (!user) {
    throw new Error("Failed to upsert user")
  }
  return user
}
