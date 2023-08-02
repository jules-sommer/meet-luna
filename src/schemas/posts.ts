import { pgTable, serial, text, json, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { users } from './users'
import { relations } from "drizzle-orm";

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    createdAt: timestamp('created_at').notNull(),
    editedAt: timestamp('edited_at'),
    title: varchar('title').notNull(),
    authorId: integer('author_id').references(() => users.id),
    content: text('content').notNull(),
    tags: json('tags').notNull().default(['Jules Sommer']),
});

export const postsRelations = relations(posts, ({ one }) => ({
    author: one(users, {
        fields: [posts.authorId],
        references: [users.id],
    }),
}));

