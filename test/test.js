// 最新活動
// 最新更新
// 會用到 axios 所以要 import 進來
import axios from 'axios'
// 要對 html 的網頁發請求所以
import * as cheerio from 'cheerio'
// 會用到模板所以
// import template from '../templates/latest.js'
// // 物件複製
// import writeJSON from '../utils/writeJSON.js'

const main = async () => {
  try {
    const { data } = await axios.get('https://www.thatskygame.com/news/')
    const $ = cheerio.load(data)
    // 深層複製一個物件出來
    // const bubble = JSON.parse(JSON.stringify(template))
    // bubble.body.contents[0].url = $('.article img').attr('src')
    // bubble.body.contents[1].contents[0].contents[1].contents[0].text = $('.article-content .article-title').eq(0).text()
    // bubble.body.contents[1].contents[0].contents[2].contents[0].contents[1].text = $('.article-content .article-date').eq(0).text()
    // bubble.body.contents[1].contents[0].contents[3].contents[0].action.uri = $('.article a').eq(0).attr('href')

    // writeJSON(bubble, 'sky')

    // test
    console.log('圖片 ' + 'https:' + $('.article img').attr('src'))
    console.log('標題 ' + $('.article-content .article-title').eq(0).text())
    console.log('日期 ' + $('.article-content p.article-date').eq(0).text())
    console.log('網址 ' + $('.article a').eq(0).attr('href'))
  } catch (error) {
    console.log(error)
  }
}
main()
