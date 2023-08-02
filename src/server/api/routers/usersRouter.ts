import { db, users } from '@utils/db';
import { createClient } from "@supabase/supabase-js";
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../utils';
import type { User } from '@supabase/supabase-js';
import { TRPCError } from '@trpc/server';

export const userRouter = createTRPCRouter({

    testRouter: publicProcedure
        .input(z.string())
        .query(async ({ ctx, input }) => {

            const name = input;

            return {
                data: `Hello from TRPC, ${name}!`,
            }
            
        }),

    signIn: publicProcedure
        .input(z.object({
            email: z.string(),
            redirectUrl: z.string(),
        }))
        .query(async ({ input, ctx }) => {

            const { email, redirectUrl } = input;
            const { supabase } = ctx;

            const { data, error } = await supabase.auth.signInWithOtp({
                email: email,
                options: {
                    emailRedirectTo: redirectUrl,
                }
            })
            if (error) {
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: error.message,
                })
            }

            return { data, error }
        
        }),

})