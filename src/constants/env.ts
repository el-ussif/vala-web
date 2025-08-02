import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
export const Env = createEnv({
  server: {
  },
  client: {
    NEXT_PUBLIC_APP_NAME: z.string().optional(),
    NEXT_PUBLIC_APP_URL: z.string().optional(),
    NEXT_PUBLIC_RECRUITER_LINK: z.string().optional(),
    NEXT_PUBLIC_LINKEDIN_LINK: z.string().optional(),
    NEXT_PUBLIC_CONTACT_EMAIL: z.string().optional(),
    NEXT_PUBLIC_WAIT_LIST_LINK: z.string().optional(),
    NEXT_PUBLIC_TALLY_ID: z.string().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_RECRUITER_LINK: process.env.NEXT_PUBLIC_RECRUITER_LINK,
    NEXT_PUBLIC_LINKEDIN_LINK: process.env.NEXT_PUBLIC_LINKEDIN_LINK,
    NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    NEXT_PUBLIC_WAIT_LIST_LINK: process.env.NEXT_PUBLIC_WAIT_LIST_LINK,
    NEXT_PUBLIC_TALLY_ID: process.env.NEXT_PUBLIC_TALLY_ID,
  },
});
