import throttle from 'lodash.throttle';

import Vimeo from '@vimeo/player';

const player = new Vimeo('vimeo-player');

const handleTimeUpdate = throttle(event => {
  const currentTime = event.seconds;

  localStorage.setItem('videoplayer-current-time', currentTime.toString());
}, 1000);

player.on('timeupdate', handleTimeUpdate);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}
