// 歌曲列表
const songs = [
{ title: '测试声音', url: 'https://oos.admintop.top/raw/music/%E7%BE%8E%E5%AE%9C%E4%BD%B3%E9%97%A8%E9%93%83%E9%9F%B3%EF%BC%88%E7%BA%AF%E9%9F%B3%E4%B9%90%E7%89%88%EF%BC%89%E3%80%8B%E6%88%90%E5%93%81.mp3' },
{ title: '别来无恙', url: 'https://oos.admintop.top/raw/music/%E5%88%AB%E6%9D%A5%E6%97%A0%E6%81%99.mp3' },
{ title: '我可以', url: 'https://oos.admintop.top/raw/music/%E6%88%91%E5%8F%AF%E4%BB%A5%20-%20%E6%88%BF%E4%B8%9C%E7%9A%84%E7%8C%AB.mp3' },
{ title: '我好想你', url: 'https://oos.admintop.top/raw/music/%E6%88%91%E5%A5%BD%E6%83%B3%E4%BD%A0%20-%20%E6%BD%98%E5%B9%BF%E7%9B%8A.mp3' },
{ title: '晚风', url: 'https://oos.admintop.top/raw/music/%E6%99%9A%E9%A3%8E%20-%207opy%20&%20BT07.mp3' },
{ title: '致你', url: 'https://oos.admintop.top/raw/music/%E8%87%B4%E4%BD%A0%20-%20yihuik%E8%8B%A1%E6%85%A7.mp3' },
  
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
