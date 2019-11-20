const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    volume: 0.3,
    loop: 'all',
    audio: [
	  {
        name: '像鱼',
        artist: 'unknow',
        url: 'http://lc-BlL0X3c0.cn-n1.lcfile.com/5f027329c7d1e3b797ee/%E5%83%8F%E9%B1%BC.mp3',
        cover: 'http://imge.kugou.com/stdmusic/20130625/20130625181709936236.jpg',
      },
      {
        name: '时间煮酒',
        artist: '郁可唯',
        url: 'http://up.mcyt.net/?down/37600.mp3',
        cover: 'http://imge.kugou.com/stdmusic/20130625/20130625181709936236.jpg',
      },
      {
        name: '爱情转移',
        artist: '陈奕迅',
        url: 'http://other.web.ra01.sycdn.kuwo.cn/resource/n2/320/52/97/1397406180.mp3',
        cover: 'http://imge.kugou.com/stdmusic/20161010/20161010200518926406.jpg',
      },
            {
        name: '钟无艳',
        artist: '谢安琪',
        url: 'http://www.ytmp3.cn/down/39157.mp3',
        cover: 'http://img.ytmp3.cn/image/75.jpg',
      },
            {
        name: '不将就',
        artist: '李荣浩',
        url: 'http://www.ytmp3.cn/down/32925.mp3',
        cover: 'http://img.ytmp3.cn/image/31.jpg',
      },
             {
        name: "岁月神偷",
        artist: '金玟岐',
        url: 'http://www.ytmp3.cn/down/44537.mp3',
        cover: 'http://img.ytmp3.cn/image/69.jpg',
      },
      {
        name: '惊蛰',
        artist: '音阙诗听/王梓钰',
        url: 'http://www.ytmp3.cn/down/48755.mp3',
        cover: 'http://p1.music.126.net/5MmXpaP9r88tNzExPGMI8Q==/109951163370350985.jpg?param=130y130',
      }            
    ]
    });