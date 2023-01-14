const btnElements = document.querySelectorAll('.btn');
const squaresElements = document.querySelectorAll('.square');
const squaresTexts = document.querySelectorAll('.square__text');
const squaresColors = ['square--yellow', 'square--azure', 'square--violet', 'square--pink', 'square--green'];
const body = document.querySelector('body');

// console.log(btnElements);
// console.log(squaresElements);
// console.log(squaresTextElements);
// console.log(squaresColors)

btnElements[0].addEventListener('click', () => {
    squaresElements[0].classList.add('square--yellow')
})

btnElements[1].addEventListener('click', () => {
    squaresTexts[0].innerHTML = `SUCCESS`
})

btnElements[2].addEventListener('click', () => {
    squaresElements[2].classList.add('square--inv')
})

btnElements[3].addEventListener('click', () => {
    const selected = squaresElements[3];

    if (selected.classList.contains('square--inv')) {
        selected.classList.remove('square--inv');
    } else {
        selected.classList.add('square--inv');
    }
})

btnElements[4].addEventListener('click', () => {
    const selected = squaresElements[4];

    squaresColors.forEach(color => selected.classList[1] === color && selected.classList.remove(color));

    selected.classList.add(squaresColors[Math.ceil(Math.random() * squaresColors.length) - 1]);
})

btnElements[5].addEventListener('click', () => {
    let startNum = 0
    const changeNum = () => {
        if (startNum <= 10) {
            squaresTexts[2].innerHTML = `${startNum}`
            startNum++
        }
    }

    setInterval(changeNum, 3000)
})

btnElements[6].addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark')
    } else {
        body.classList.add('dark')
    }
})