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
    this.setClass(this.zero, this.count);
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

  setClass(previos: number, current: number) {
    this.sliderImages[previos].classList.add('slider__image-opacity');
    this.sliderImages[current].classList.remove('slider__image-opacity');
    this.prevImg = current;
  }

  nextBtnCheck() {
    if (this.count !== this.totalImages) {
      this.setClass(this.prevImg, this.count);
    } else {
      this.count = this.zero;
      this.setClass(this.prevImg, this.count);
    }
  }

  prevBtnCheck() {
    if (this.count === this.zero) {
      this.count = this.totalImages;
      this.setCountSub();
      this.setClass(this.prevImg, this.count);
    } else {
      this.setCountSub();
      this.setClass(this.prevImg, this.count);
    }
  }
}
