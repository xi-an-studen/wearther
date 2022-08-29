const dayjs = require('dayjs');
const hour  =dayjs().format('HH')

function fn(
    weatherData, lifeData, imgurl, lovingDays,
    content,source,
    content1,
    note,source2,content2,
    content3,
    content4,
    content5,
) {
  const { daily: weatherDataDaily } = weatherData;
  const { daily } = lifeData;
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/qweather-icons@1.1.1/font/qweather-icons.css">
    </head>
    <style>
    .daily_item{
        width: 250px;
        min-height:200px ;
        background: #fff;
        border-radius: 12px;
        margin: 20px 0;
    }
    </style>
    <body>
    <!-- 天气 -->
    <div style="margin: 10px 0;font-size: 20px;font-weight: bold">今天是${dayjs().format('YYYY-MM-DD')}</div>
    <div style="margin: 10px 0">星期${['天', '一', '二', '三', '四', '五', '六'][dayjs().day()]}</div>
    
    <div class="daily_item">
                <div>温度：${weatherDataDaily[0].tempMin}°C -- ${weatherDataDaily[0].tempMax}°C</div>
                <div>日升：${weatherDataDaily[0].sunrise}</div>
                <div>日落：${weatherDataDaily[0].sunset}</div>
                <div>天气：${weatherDataDaily[0].textDay} <i class="qi-${weatherDataDaily[0].iconDay}"></i></div>
                <div>风向：${weatherDataDaily[0].windDirDay} </div>
                <div>风力：${weatherDataDaily[0].windScaleDay} </div>
                <div>风速：${weatherDataDaily[0].windSpeedDay} </div>
                <div>相对湿度：${weatherDataDaily[0].humidity} </div>
            </div>
      <div>
      <p style="margin: 20px 0;font-size: 20px">
        <font color="#0066FF">空</font><font color="#3FA5FF">气</font><font color="#0066FF">指</font><font color="#3FA5FF">数</font>
    </p>
        <ul style="font-size: 18px;margin: 20px 0">
            <li style="margin: 10px 0">${daily.filter(e=>e.type=='1')[0]['name']}：${daily.filter(e=>e.type=='1')[0]['text']}</li>
            <li style="margin: 10px 0">${daily.filter(e=>e.type=='3')[0]['name']}：${daily.filter(e=>e.type=='3')[0]['text']}</li>
            <li style="margin: 10px 0">${daily.filter(e=>e.type=='5')[0]['name']}：${daily.filter(e=>e.type=='5')[0]['text']}</li>
            <li style="margin: 10px 0">${daily.filter(e=>e.type=='8')[0]['name']}：${daily.filter(e=>e.type=='8')[0]['text']}</li>
            <li style="margin: 10px 0">${daily.filter(e=>e.type=='11')[0]['name']}：${daily.filter(e=>e.type=='11')[0]['text']}</li>
            <li style="margin: 10px 0">${daily.filter(e=>e.type=='15')[0]['name']}：${daily.filter(e=>e.type=='15')[0]['text']}</li>
        </ul>
        <!-- 天数 -->
          <p style="margin:10px 0;font-size: 20px">
            <font color="#FF00FF">今</font><font color="#ED00FF">天</font><font color="#DB00FF">是</font><font color="#C900FF">和</font><font color="#B700FF">你</font><font color="#A500FF">在</font><font color="#9300FF">一</font><font color="#8100FF">起</font><font color="#6F00FF">的</font><font color="#E000FF">${lovingDays}</font><font color="#1500FF">天</font>
          </p>
          <img
            style="width: 100%; max-width: 768px;border-radius: 12px;margin-bottom: 15px;"
            src="${imgurl}"
            alt="图片"
          />
        <!-- 获取朋友圈的简单走心的文案句子 -->
          <p style="font-size: 18px; text-indent: 2em;">
            ${content}
          </p>
          <p style="font-size: 16px; text-indent: 2em;">
            <span style="float: right"> ---- ${source}</span>
          </p>
        <!-- 喜欢一个人，连TA放的屁都是彩虹色的 -->
        <p style="font-size: 20px;">
          <font color="#FF2800">爱</font><font color="#FF5000">一</font><font color="#FF7800">个</font><font color="#FFA000">人</font><font color="#FFC800">,</font><font color="#FFF000">翻</font><font color="#D7FF00">一</font><font color="#AFFF00">座</font><font color="#87FF00">山</font><font color="#5FFF00">.</font><font color="#37FF00">.</font><font color="#0FFF00">.</font>
          </p>
          <p style="font-size: 18px; text-indent: 2em; font-style: italic;">
           ${content1}
          </p>
        <!-- 接口返回随机一句英剧句子，包含英语原句、释义、来源等。 -->
        <div>
            <p style="font-size: 20px;">
           <font color="#33CCFF">每</font><font color="#728CFF">日</font><font color="#334CFF">英</font><font color="#720CFF">语</font>
          </p>
          <p style="font-size:18px; text-indent: 2em; font-style: italic;">
           ${content2}
          </p>
          <p style="font-size: 18px; text-indent: 2em; font-style: italic;">
           ${note}
          </p>
          <p style="font-size: 18px; text-indent: 2em; font-style: italic;">
           ${source2}
          </p>
        </div>
        <!-- 网络云音乐App上，那些脍炙人口的热门评论。 -->
        <div>
        <p style="font-size: 20px;">
           <font color="#FF2800">网</font><font color="#FF5000">易</font><font color="#FF7800">云</font><font color="#FFA000">热</font><font color="#FFC800">评</font>
          </p>
          <p style="font-size: 18px; text-indent: 2em; font-style: italic;">
           ${content3}
          </p>
        </div>
        <div>
                <p style="font-size: 20px;">
                 <font color="#FF3333">有</font><font color="#FF7272">你</font><font color="#FF33B2">真</font><font color="#FF72F2">好</font>
              </p>
              <p style="font-size: 16px; text-indent: 2em;">
               ${hour > 12 && hour < 24 ? content5 : content4}
              </p>
        </div>
        <div>
      </div>
    </div></body>
    
  </html>
  `;
}

module.exports = fn;
