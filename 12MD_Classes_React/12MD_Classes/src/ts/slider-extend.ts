import Slider from './slider-main';

export default class SliderExtend extends Slider {
  dotElement: HTMLDivElement;
  dotsElements: NodeListOf<HTMLDivElement>;
  previousId: number;

  constructor(selector: string) {
    super(selector);
    this.dotElement = this.rootElement.querySelector('.js-dots');
    this.createDots();
    this.dotsElements = this.rootElement.querySelectorAll('.js-dot');
    this.initEventsDots();
    this.previousId = this.startnum;
  }

  initEventsDots() {
    this.dotsElements.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        const target = e.target as HTMLDivElement;
        this.count = +target.id;
        this.changeDotBg();
        this.setClass(this.prevImg, this.count);
      });
    });
  }

  createDots() {
    for (let i = 0; i < this.totalImages; i += 1) {
      this.dotElement.innerHTML += `
        <div class="dot js-dot ${i === this.startnum ? 'dot-active' : ''}" id="${i}"></div>
        `;
    }
  }

  changeDotBg() {
    this.dotsElements[this.prevImg].classList.remove('dot-active');
    this.dotsElements[this.count].classList.add('dot-active');
  }

  nextBtnCheck() {
    if (this.count !== this.totalImages) {
      this.changeDotBg();
      this.setClass(this.prevImg, this.count);
    } else {
      this.count = this.startnum;
      this.changeDotBg();
      this.setClass(this.prevImg, this.count);
    }
  }

  prevBtnCheck() {
    if (this.count === this.startnum) {
      this.count = this.totalImages;
      this.setCountSub();
      this.changeDotBg();
      this.setClass(this.prevImg, this.count);
    } else {
      this.setCountSub();
      this.changeDotBg();
      this.setClass(this.prevImg, this.count);
    }
  }
}
