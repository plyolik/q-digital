export class ApiSounds {
  static getSounds = () => fetch('https://imagesapi.osora.ru/?isAudio=true').then(r => r.json())
}
