import { QueryClient } from "@tanstack/solid-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCSolidStart } from "solid-trpc";
import { AppRouter } from "@server/api/root";
import { getBaseUrl } from '@/lib/getBaseUrl'

export const api = createTRPCSolidStart<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`
        })
      ]
    };
  }
});

export const queryClient = new QueryClient();