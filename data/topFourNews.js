import 'dotenv/config'
// 會用到 axios 所以要 import 進來
import axios from 'axios'
// 要對 html 的網頁發請求所以
import * as cheerio from 'cheerio'
// 會用到模板所以
import template from '../templates/topFourNews.js'
// 物件複製
import writeJSON from '../utils/writeJSON.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.thatskygame.com/news/')
    const $ = cheerio.load(data)
    const bubble = JSON.parse(JSON.stringify(template))
    for (let i = 0; i < 4; i++) {
      // 深層複製一個物件出來
      bubble.contents[i].hero.url = 'https:' + $('.article-image img').eq(i).attr('src')
      bubble.contents[i].body.contents[0].text = $('.article-content .article-title').eq(i).text()
      bubble.contents[i].body.contents[1].contents[0].text = $('.article-content p.article-date').eq(i).text().slice(0, 10)
      bubble.contents[i].body.contents[2].action.uri = 'https://www.thatskygame.com' + $('.article a').eq(i).attr('href')
    }
    writeJSON(bubble, 'topFourNews')
    // 用一個資料夾來放印出來的 JSON
    // 如果它存在，沒有加 sync 要寫 callback function，加了sync會直接把結果回傳
    const result = await event.reply({
      type: 'flex',
      altText: $('.article-content .article-title').eq(0).text(),
      contents: bubble
    })

    if (result.message) {
      throw new Error(result.message)
    }
  } catch (error) {
    console.log(error)
  }
}
