import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { posts } from '../schemas/posts';
import { users } from '../schemas/users';
import { env } from "@env"

const client = postgres(env.DATABASE_URL);
const db = drizzle(client);

export { db, users, posts };