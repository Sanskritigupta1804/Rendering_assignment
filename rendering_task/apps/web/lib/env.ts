import { z } from "zod";

const EnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_TIME_THROTTLE: z.coerce.number().default(0),
  NEXT_PUBLIC_TIME_ISR_REVALIDATE: z.coerce.number().default(60),
});

export type env = z.infer<typeof EnvSchema>;

const { data: env, error } = EnvSchema.safeParse(process.env);

if (error) {
  console.error("❌ Invalid env:");
  console.error(JSON.stringify(error.issues, null, 2));
  process.exit(1);
}

export default env!;

// Keep the legacy getEnv function for backward compatibility
export const getEnv = () => {
  return {
    apiUrl: env.NEXT_PUBLIC_API_URL,
    throttle: env.NEXT_PUBLIC_TIME_THROTTLE,
    isrRevalidateTime: env.NEXT_PUBLIC_TIME_ISR_REVALIDATE,
  };
};