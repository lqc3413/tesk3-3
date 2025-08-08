$(function () {
  $.ajax({
    type: 'GET',
    url: "https://www.gov.cn/pushinfo/v150203/pushinfo.jsonp",
    dataType: 'jsonp',
    jsonp: 'pushInfoJsonpCallBack',
    jsonpCallback: 'pushInfoJsonpCallBack',
    success: function (res) {
      console.log(res)
      const data = res.map(item => {
        return (`
                <a href="${item.link}" class="info-item">
        <span class="info-bullet">•</span>
        <span class="info-content">${item.title}</span>
        <span class="info-date">${item.pubDate}</span>
      </a>
          `)
      })
      $('.info-list').html(data.join(''))
    },
    error: function (error) {
      console.error(error)
    }
  })
})