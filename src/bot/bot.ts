import "../config/env.js"
import { Telegraf, type Context } from "telegraf"
import { helpCommand } from "./commands/help.js"
import { startCommand } from "./commands/start.js"

const token = process.env.BOT_TOKEN ?? process.env.TELEGRAM_API_TOKEN

if (!token) {
  throw new Error("BOT_TOKEN (or TELEGRAM_API_TOKEN) is not set")
}

export const bot: Telegraf<Context> = new Telegraf(token)

bot.start(startCommand)
bot.help(helpCommand)
bot.command("help", helpCommand)
