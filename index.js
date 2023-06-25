// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
import 'dotenv/config'
import linebot from 'linebot'
import latestNews from './data/latestNews.js'
import topFourNews from './data/topFourNews.js'
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
  // channelApiKey: process.env.CHANNEL_APIKEY
})
// event 為我收到的訊息
bot.on('message', event => {
  // 如果我收到的訊息是 sky
  if (event.message.type === 'text' && event.message.text === 'latest news') {
    // 則執行 sky(event)
    latestNews(event)
  } else if (event.message.type === 'text' && event.message.text === 'top four news') {
    topFourNews(event)
  }
})
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('哈囉')
})
