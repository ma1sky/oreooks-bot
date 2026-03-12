import "./config/env.js"
import { createApp } from "./app.js"
import { launchBot } from "./bot/index.js"

const app = createApp()
const port = Number(process.env.PORT ?? 3000)

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})

launchBot().catch((error) => {
  console.error("Failed to start bot:", error)
  process.exit(1)
})
