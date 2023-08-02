import { initTRPC } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { createClient } from "@supabase/supabase-js";
import { env } from '@env'

export const createTRPCContext = async (opts: CreateNextContextOptions) => {

    const supabase = createClient(
        env.SUPABASE_URL! as string,
        env.ANON_KEY! as string
    );

    return {
        supabase,
        ...opts
    }

};

export const t = initTRPC.context<typeof createTRPCContext>().create();

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;