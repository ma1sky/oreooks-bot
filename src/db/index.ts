import { Pool } from "pg"

let pool: Pool | null = null

function buildPool(): Pool {
  const databaseUrl = process.env.DATABASE_URL
  if (databaseUrl) {
    return new Pool({ connectionString: databaseUrl })
  }

  const host = process.env.PGHOST
  const user = process.env.PGUSER
  const password = process.env.PGPASSWORD
  const database = process.env.PGDATABASE
  const port = Number(process.env.PGPORT ?? 5432)

  if (!host || !user || !password || !database) {
    throw new Error(
      "Database config missing. Set DATABASE_URL or PGHOST/PGUSER/PGPASSWORD/PGDATABASE."
    )
  }

  return new Pool({ host, user, password, database, port })
}

export function getPool(): Pool {
  if (!pool) {
    pool = buildPool()
  }
  return pool
}
