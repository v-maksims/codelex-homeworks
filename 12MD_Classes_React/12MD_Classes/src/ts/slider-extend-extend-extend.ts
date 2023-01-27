import SliderExtendExtend from './slider-extend-extend';

export default class SliderExtendExtendExtend extends SliderExtendExtend {
  fullScreen: HTMLButtonElement;
  fullScreenToner: HTMLDivElement;
  fullScreenImage: HTMLImageElement;
  timer: NodeJS.Timer | null;

  constructor(selector: string) {
    super(selector);
    this.fullScreen = this.rootElement.querySelector('.js-fullscreen-ico');
    this.fullScreenToner = document.querySelector('.js-toner');
    this.fullScreenImage = this.rootElement.querySelector('.js-full-image');
    this.timer = null;
    this.initEventFullScreen();
    this.sliderAutoPlay();
  }

  initEventFullScreen() {
    this.fullScreen.addEventListener('click', () => this.setFullScreenImage());
    this.fullScreenToner.addEventListener('click', () => this.removeFullScreenImage());
  }

  sliderAutoPlay() {
    this.timer = setInterval(() => {
      this.changeDotBg();
      this.removeAddOpacity();
      this.imageSlideNext();
    }, 10000);
  }

  setFullScreenImage() {
    this.fullScreenToner.style.display = 'block';
    this.fullScreenImage.src = this.sliderImages[this.count].src;
  }

  removeFullScreenImage() {
    this.fullScreenToner.style.display = 'none';
    this.fullScreenImage.src = '';
  }
}
