import type { Context } from "telegraf"

export async function helpCommand(ctx: Context): Promise<void> {
  await ctx.reply("Доступные команды: /start, /help")
}
