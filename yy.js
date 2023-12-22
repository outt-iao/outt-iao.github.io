// 歌曲列表
const songs = [
  { title: '别来无恙', url: 'https://oos.admintop.top/raw/music/%E5%88%AB%E6%9D%A5%E6%97%A0%E6%81%99.mp3' }
  ,{ title: '稻香', url: 'https://oos.admintop.top/raw/public/%E7%A8%BB%E9%A6%99.flac' }
  ,{ title: '七里香', url: 'https://oos.admintop.top/raw/public/%E4%B8%83%E9%87%8C%E9%A6%99.flac' }

,{ title: '侧脸', url: ' https://oos.admintop.top/raw/music/%E4%BA%8E%E6%9E%9C%20-%20%E4%BE%A7%E8%84%B8.mp3' }
,{ title: '偏爱', url: 'https://oos.admintop.top/raw/music/%E5%BC%A0%E8%8A%B8%E4%BA%AC-%E5%81%8F%E7%88%B1.mp3' }
,{ title: '我可以', url: 'https://oos.admintop.top/raw/music/%E6%88%BF%E4%B8%9C%E7%9A%84%E7%8C%AB%20-%20%E6%88%91%E5%8F%AF%E4%BB%A5.mp3' }
,{ title: '倒数', url: 'https://oos.admintop.top/raw/music/%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E5%80%92%E6%95%B0.mp3' }


  // 添加更多歌曲链接和标题
];



// 在页面加载时动态创建歌曲列表
const songList = document.getElementById('songList');
songs.forEach(song => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = song.url;
  link.innerHTML = `<span>${song.title}</span>`;
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const songUrl = this.getAttribute('href');
    const songTitle = this.querySelector('span').textContent;
    audioPlayer.src = songUrl;
    audioPlayer.play();
    document.querySelector('h1').textContent = songTitle;
  });
  listItem.appendChild(link);
  songList.appendChild(listItem);
});

// 修复静音功能
const audioPlayer = document.getElementById('audioPlayer');
audioPlayer.volume = 0.5; // 默认音量设置为 0.5
let isMuted = false;

function toggleMute() {
  if (isMuted) {
    audioPlayer.volume = 0.5;
    isMuted = false;
  } else {
    audioPlayer.volume = 0;
    isMuted = true;
  }
}

// 自动播放下一曲
let currentSongIndex = 0;
audioPlayer.onended = function() {
  playNext();
};

function playNext() {
  if (isShuffle) {
    currentSongIndex = Math.floor(Math.random() * songs.length);
  } else {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  const nextSong = songs[currentSongIndex];
  audioPlayer.src = nextSong.url;
  audioPlayer.play();
  document.querySelector('h1').textContent = nextSong.title;
}

// 单曲循环
let isSingleLoop = false;
const loopButton = document.getElementById('loopButton');

function toggleSingleLoop() {
  isSingleLoop = !isSingleLoop;
  audioPlayer.loop = isSingleLoop;
  if (isSingleLoop) {
    loopButton.classList.add('active');
  } else {
    loopButton.classList.remove('active');
  }
}

// 随机播放
let isShuffle = false;
const shuffleButton = document.getElementById('shuffleButton');

function toggleShuffle() {
  isShuffle = !isShuffle;
  if (isShuffle) {
    shuffleButton.classList.add('active');
  } else {
    shuffleButton.classList.remove('active');
  }
}
