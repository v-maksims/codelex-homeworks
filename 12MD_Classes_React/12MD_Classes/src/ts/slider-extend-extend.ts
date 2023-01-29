import SliderExtend from './slider-extend';

export default class SliderExtendExtend extends SliderExtend {
  smallImages: HTMLDivElement;
  smallImagesAll: NodeListOf<HTMLImageElement>;

  constructor(selector: string) {
    super(selector);
    this.smallImages = this.rootElement.querySelector('.js-images-bottom');
    this.createSamllImg();
    this.smallImagesAll = this.rootElement.querySelectorAll('.js-image-small');
    this.removeAddOpacity();
    this.eventListenerImg();
  }

  createSamllImg() {
    for (let i = 0; i < this.totalImages; i += 1) {
      this.smallImages.innerHTML += `
        <img class="slider__image-small ${i !== this.count ? 'slider__image-small--opacity' : ''} js-image-small" src="${this.sliderImages[i].src}" 
            alt="BMW #${i + 1}" >
        `;
    }
  }

  eventListenerImg() {
    this.smallImagesAll.forEach((img) => {
      img.addEventListener('click', () => {
        this.sliderImages.forEach((bigImg) => {
          if (bigImg.alt === img.alt) {
            this.count = +img.alt.slice(img.alt.indexOf('#') + 1) - 1;
            this.removeAddOpacity();
            this.changeDotBg();
            this.setClass();
          }
        });
      });
    });
  }

  removeAddOpacity() {
    this.smallImagesAll[this.prevImg].classList.add('slider__image-small--opacity');
    this.smallImagesAll[this.count].classList.remove('slider__image-small--opacity');
  }

  setClassOpacity() {
    this.removeAddOpacity();
    super.setClassDots();
  }
  nextBtnCheck() {
    if (this.count !== this.totalImages) {
      this.setClassOpacity();
    } else {
      this.count = this.zero;
      this.setClassOpacity();
    }
  }

  prevBtnCheck() {
    if (this.count === this.zero) {
      this.count = this.totalImages;
      this.setCountSub();
      this.setClassOpacity();
    } else {
      this.setCountSub();
      this.setClassOpacity();
    }
  }

  initEventsDots() {
    this.dotsElements.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        const target = e.target as HTMLDivElement;
        this.count = +target.id;
        this.setClassOpacity();
      });
    });
  }
}
