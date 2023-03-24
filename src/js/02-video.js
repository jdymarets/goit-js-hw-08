import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.querySelector('#vimeo-player');
const player = new Player(playerEl);
const STORAGE_KEY_TIME = 'videoplayer-current-time';
localStorage.setItem(STORAGE_KEY_TIME, '0');

// player.setCurrentTime(localStorage.getItem(STORAGE_KEY_TIME) || 0);

function onPlay(time) {
  localStorage.setItem(STORAGE_KEY_TIME, JSON.stringify(time.seconds));
}
player.on('timeupdate', throttle(onPlay, 1000));

// const savedTime = localStorage.getItem(STORAGE_KEY_TIME)
//   // ? JSON.parse(localStorage.getItem(STORAGE_KEY_TIME))
//   // : 0;
// player.setCurrentTime(savedTime);
