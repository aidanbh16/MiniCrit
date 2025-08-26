import { Pool } from "pg";

declare global {
  var devpool: Pool;
}

const pool = global.devpool ?? new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

pool.connect()
  .then(client => {
    console.log("Connected to DB successfully");
    client.release();
  })
  .catch(err => {
    console.error("Error connecting to DB:", err);
});

if (process.env.NODE_ENV !== "production") {
  global.devpool = pool;
}

export default pool;