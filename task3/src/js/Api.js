export class Api {
  static getImages = () => fetch('https://imagesapi.osora.ru/').then(r => r.json())
}
