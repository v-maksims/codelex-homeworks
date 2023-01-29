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
  }

  initEventsDots() {
    this.dotsElements.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        const target = e.target as HTMLDivElement;
        this.count = +target.id;
        this.setClassDots();
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

  setClassDots() {
    this.changeDotBg();
    super.setClass();
  }

  nextBtnCheck() {
    if (this.count !== this.totalImages) {
      this.setClassDots();
    } else {
      this.count = this.startnum;
      this.setClassDots();
    }
  }

  prevBtnCheck() {
    if (this.count === this.zero) {
      this.count = this.totalImages;
      this.setCountSub();
      this.setClassDots();
    } else {
      this.setCountSub();
      this.setClassDots();
    }
  }
}
