const calc = () => {
    const calcType = document.getElementById("calc-type");
    const calcArea = document.getElementById("calc-input");
    const calcMaterial = document.getElementById("calc-type-material");
    const total = document.getElementById("calc-total");
    const calcBlock = document.getElementById("calc");

    console.log(calcBlock);
    console.log(calcType);
    console.log(calcMaterial);
    console.log(calcArea);
    console.log(total);

    // const textCalcBlock = document.querySelectorAll('.calc-block input');
    // const calcBlock = document.querySelector('.calc-block');
    // const calcType = document.querySelector('.calc-type');
    // const calcSquare = document.querySelector('.calc-square');
    // const calcCount = document.querySelector('.calc-count');
    // let calcDay = document.querySelector('.calc-day');
    // const total = document.getElementById('total');

    // const countCalc = () => {
    //     const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    //     const calcSquareValue = calcSquare.value;

    //     let totalValue = 0;
    //     let calcCountValue = 1;
    //     let calcDayValue = 1;

    //     if (calcCount.value > 1) {
    //         calcCountValue += +calcCount.value / 10;
    //     }

    //     if (calcDay.value && calcDay.value < 5) {
    //         calcDayValue = 2;
    //     } else if (calcDay.value && calcDay.value < 10) {
    //         calcDayValue = 1.5;
    //     }

    //     if (calcTypeValue && calcSquareValue) {
    //         totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;

    //     } else {
    //         totalValue = 0;
    //     }
    //     animate({
    //         duration: 500,
    //         timing(timeFraction) {
    //             return timeFraction;
    //         },
    //         draw(progress) {
    //             for (let i = 0; i <= totalValue; i++) {
    //                 total.textContent = Math.floor(i * progress);
    //             }
    //         }
    //     });
    // };

    // calcBlock.addEventListener('input', (e) => {
    //     if (e.target === calcType ||
    //         e.target === calcSquare ||
    //         e.target === calcCount ||
    //         e.target === calcDay) {
    //         countCalc();
    //     }

    // });

    // textCalcBlock.forEach(textBlock => {
    //     textBlock.addEventListener('input', (e) => {
    //         e.target.value = e.target.value.replace(/\D+/gi, '');
    //     });

    // });
};

export default calc;