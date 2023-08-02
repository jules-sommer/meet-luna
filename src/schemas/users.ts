import { pgTable, serial, text, json, varchar, timestamp, integer, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { posts } from "./posts";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    createdAt: timestamp('created_at').notNull(),
    editedAt: timestamp('edited_at'),
    name: varchar('name').notNull(),
    email: varchar('email').notNull(),
    password: varchar('password').notNull(),
    role: varchar('role').notNull().default('user'),
    posts: json('posts').notNull().default([]),
});

export const usersRelations = relations(users, ({ many }) => ({
	usersToRoles: many(usersToRoles),
    posts: many(posts),
}));

export const roles = pgTable('roles', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    permissions: json('permissions').notNull().default([]),
})

export const rolesRelations = relations(roles, ({ many }) => ({
	usersToRoles: many(usersToRoles),
}));

export const usersToRoles = pgTable('users_to_roles', {
    userId: integer('user_id').notNull().references(() => users.id),
    roleId: integer('role_id').notNull().references(() => roles.id),
}, (t) => ({
    pk: primaryKey(t.userId, t.roleId),
}));

export const usersToRolesRelations = relations(usersToRoles, ({ one }) => ({
	roles: one(roles, {
		fields: [usersToRoles.roleId],
		references: [roles.id],
	}),
	user: one(users, {
		fields: [usersToRoles.userId],
		references: [users.id],
	}),
}));