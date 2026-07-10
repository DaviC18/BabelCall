/** biome-ignore-all assist/source/organizeImports: <> */
import z from "zod";
import dotenv from "dotenv"
dotenv.config()

const envSchema = z.object({
    DATABASE_URL: z
		.string()
		.min(1)
		.url() // valida URL
		.refine((v) => v.startsWith("postgresql://"), {
			message: "DATABASE_URL deve começar com postgresql://",
		}),
})

export const env = envSchema.parse({
    DATABASE_URL: process.env.DATABASE_URL
})