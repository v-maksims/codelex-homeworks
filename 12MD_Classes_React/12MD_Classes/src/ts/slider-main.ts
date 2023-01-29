export default class Slider {
  rootElement: HTMLDivElement;
  nextBtn: HTMLButtonElement;
  prevBtn: HTMLButtonElement;
  sliderImages: NodeListOf<HTMLImageElement>;
  count: number;
  totalImages: number;
  procentsCount: number;
  prevImg: number;

  startnum = 0;
  zero = 0;
  constructor(selector: string) {
    this.rootElement = document.querySelector(selector);
    this.nextBtn = this.rootElement.querySelector('.js-next-btn');
    this.prevBtn = this.rootElement.querySelector('.js-prev-btn');
    this.sliderImages = this.rootElement.querySelectorAll('.js-image');

    this.totalImages = this.sliderImages.length;
    this.count = this.startnum;
    this.prevImg = this.startnum;
    this.setClass();
    this.initEvents();
  }

  initEvents() {
    this.nextBtn.addEventListener('click', () => this.imageSlideNext());
    this.prevBtn.addEventListener('click', () => this.imageSlidePrev());
  }

  imageSlideNext() {
    this.setCountAdd();
    this.nextBtnCheck();
  }

  imageSlidePrev() {
    this.prevBtnCheck();
  }

  setCount() {
    if (this.count === this.zero) {
      this.count = this.totalImages;
    } else {
      this.count = this.zero;
    }
  }

  setCountAdd() {
    this.count += 1;
  }

  setCountSub() {
    this.count -= 1;
  }

  setClass() {
    this.sliderImages[this.prevImg].classList.add('slider__image-opacity');
    this.sliderImages[this.count].classList.remove('slider__image-opacity');
    this.prevImg = this.count;
  }

  nextBtnCheck() {
    if (this.count !== this.totalImages) {
      this.setClass();
    } else {
      this.count = this.zero;
      this.setClass();
    }
  }

  prevBtnCheck() {
    if (this.count === this.zero) {
      this.count = this.totalImages;
      this.setCountSub();
      this.setClass();
    } else {
      this.setCountSub();
      this.setClass();
    }
  }
}
