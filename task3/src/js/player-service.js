module.exports = async function() {
}; 

export default async function player() {

  TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());

  TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());

  TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());

  // ...

};