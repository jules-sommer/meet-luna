import { userRouter } from "./routers/usersRouter";
import { createTRPCRouter } from "./utils";

export const appRouter = createTRPCRouter({
    user: userRouter
});

export type AppRouter = typeof appRouter;