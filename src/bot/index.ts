import { bot } from "./bot.js"

export async function launchBot(): Promise<void> {
  await bot.launch()
  console.log("Bot started")

  process.once("SIGINT", () => bot.stop("SIGINT"))
  process.once("SIGTERM", () => bot.stop("SIGTERM"))
}
