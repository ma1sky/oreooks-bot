import type { Context } from "telegraf"
import { upsertUser } from "../../db/userRepository.js"

export async function startCommand(ctx: Context): Promise<void> {
  const telegramId = String(ctx.from?.id ?? "")
  if (telegramId) {
    try {
      await upsertUser({
        telegramId,
        username: ctx.from?.username ?? null,
        firstName: ctx.from?.first_name ?? null,
      })
    } catch (error) {
      console.error("Failed to upsert user:", error)
    }
  }

  await ctx.reply("Привет! Я бот для управления задачами.")
}
