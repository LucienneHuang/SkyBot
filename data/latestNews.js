import 'dotenv/config'
// 會用到 axios 所以要 import 進來
import axios from 'axios'
// 要對 html 的網頁發請求所以
import * as cheerio from 'cheerio'
// 會用到模板所以
import template from '../templates/latestNews.js'
// 物件複製
import writeJSON from '../utils/writeJSON.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.thatskygame.com/news/')
    const $ = cheerio.load(data)
    // 等等刪掉
    console.log('圖片 ' + 'https:' + $('.article img').attr('src'))
    console.log('標題 ' + 'https:' + $('.article-content .article-title').eq(0).text())
    console.log('日期 ' + 'https:' + $('.article-content p.article-date').eq(0).text())
    console.log('網址 ' + 'https://www.thatskygame.com' + $('.article a').eq(0).attr('href'))
    // 深層複製一個物件出來
    const bubble = JSON.parse(JSON.stringify(template))
    bubble.body.contents[0].url = 'https:' + $('.article-image img').attr('src')
    bubble.body.contents[1].contents[0].contents[1].contents[0].text = $('.article-content .article-title').eq(0).text()
    bubble.body.contents[1].contents[0].contents[2].contents[0].contents[1].text = $('.article-content p.article-date').eq(0).text().slice(0, 11)
    bubble.body.contents[1].contents[0].contents[3].contents[0].action.uri = 'https://www.thatskygame.com' + $('.article a').eq(0).attr('href')

    writeJSON(bubble, 'latestNews')
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
