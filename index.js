const fetch = require('node-fetch');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

const sendEmail = require('./sendEmail');
const emailHtml = require('./emailHtml');

// 给dayjs添加时区选项
dayjs.extend(utc);
dayjs.extend(timezone);

const {
  fromDisplayText,
  fromDisplaySubText,
  user,
  to,
  weatherKey,
  location,
  type,
  tianXingKey,
  startDay,
} = require('./config');

async function init() {
  try {
    // 获取天气信息
    const weatherRes = await fetch(
      `https://devapi.qweather.com/v7/weather/3d?key=${weatherKey}&location=${location}`
    );
    const weatherData = await weatherRes.json();

    // 获取天气生活指数
    const lifeRes = await fetch(
      `https://devapi.qweather.com/v7/indices/1d?key=${weatherKey}&location=${location}&type=${type}`
    );
    const lifeData = await lifeRes.json();

    // 获取one一个文案及图片
    const oneRes = await fetch(
      `http://api.tianapi.com/txapi/one/index?key=${tianXingKey}`
    );
    const oneData = await oneRes.json();
    const {  imgurl } = oneData.newslist[0];
    // 获取朋友圈的简单走心的文案句子
    const twoRes = await fetch(
      `http://api.tianapi.com/pyqwenan/index?key=${tianXingKey}`
    );
    const twoData = await twoRes.json();
    const { source, content } = twoData.newslist[0];
    // 喜欢一个人，连TA放的屁都是彩虹色的
    const threeRes = await fetch(
      `http://api.tianapi.com/caihongpi/index?key=${tianXingKey}`
    );
    const threeData = await threeRes.json();
    const {  content:content1 } = threeData.newslist[0];
    // 接口返回随机一句英剧句子，包含英语原句、释义、来源等。
    const fourRes = await fetch(
      `http://api.tianapi.com/everyday/index?key=${tianXingKey}`
    );
    const fourData = await fourRes.json();
    const { source:source2 , content:content2,note } = fourData.newslist[0];
    // 网络云音乐App上，那些脍炙人口的热门评论。
    const fiveRes = await fetch(
      `http://api.tianapi.com/everyday/index?key=${tianXingKey}`
    );
    const fiveData = await fiveRes.json();
    const {content:content3 } = fiveData.newslist[0];

    // 早安。
    const sixRes = await fetch(
      `http://api.tianapi.com/zaoan/index?key=${tianXingKey}`
    );
    const sixData = await sixRes.json();
    const { content:content4 } = sixData.newslist[0];
    // 晚安。
    const sevenRes = await fetch(
      `http://api.tianapi.com/wanan/index?key=${tianXingKey}`
    );
    const sevenData = await sevenRes.json();
    const { content:content5 } = sevenData.newslist[0];
    // 土味情话。
    const eightRes = await fetch(
      `http://api.tianapi.com/saylove/index?key=${tianXingKey}`
    );
    const eightData = await eightRes.json();
    const { content:content6 } = eightData.newslist[0];

    // 计算日期



    // 发送邮件;
    for (const toItem in to) {
      console.log(toItem)
      let lovingDays = dayjs(dayjs().tz('Asia/Shanghai')).diff(
        startDay[toItem],
        'days'
      );
      // 用邮件模版生成字符串
      const htmlStr = emailHtml(
        weatherData, lifeData,
        imgurl,
        lovingDays,
        content,source,
        content1,
        note,source2,content2,
        content3,
        content4,
        content5,
      );
      sendEmail({
        from: fromDisplayText,
        to:to[toItem],
        subject:content6 ,
        html: htmlStr,
      });
    }
  } catch (e) {
    console.log(e)
    // 发送邮件给自己提示
    sendEmail({
      from: '报错啦',
      to: user,
      subject: '定时邮件-报错提醒',
      html: '我知道你很急，但是你先别急',
    });
  }
}

init();
