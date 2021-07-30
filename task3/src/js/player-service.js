import TrackPlayer, { TrackPlayerEvents } from 'react-native-track-player'

export default async function player() {
  TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_PLAY, () => TrackPlayer.play());
  TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_PAUSE, () => TrackPlayer.pause());
  TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_NEXT, () => TrackPlayer.skipToNext().catch(() => TrackPlayer.skip('0')));
  TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_PREVIOUS, () => TrackPlayer.skipToPrevious().catch(async () => {
    const length = (await TrackPlayer.getQueue()).length
    TrackPlayer.skip(`${length - 1}`)
  }));
  TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_STOP, () => TrackPlayer.destroy());
};