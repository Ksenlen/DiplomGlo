import { animate } from "./helpers";

const calc = (price = 1000) => {
    const calcType = document.getElementById("calc-type");
    const calcArea = document.getElementById("calc-input");
    const calcMaterial = document.getElementById("calc-type-material");
    const calcTotal = document.getElementById("calc-total");
    const calcBlock = document.getElementById("calc");

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcArea.value;
        let calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value;

        let totalValue = 0;


        if (calcTypeValue && calcArea.value && calcMaterialValue) {
            totalValue = price * calcSquareValue * calcTypeValue * calcMaterialValue;
        } else {
            totalValue = 0;
        }


        animate({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                calcTotal.textContent = Math.floor(totalValue * progress);
                calcTotal.setAttribute(
                    "placeholder",
                    Math.floor(totalValue * progress)
                );
            },
        });
    };

    if (calcBlock) {
        calcBlock.addEventListener("input", (e) => {
            if (
                e.target === calcType ||
                e.target === calcArea ||
                e.target === calcMaterial
            ) {
                countCalc();
            }
        });


        calcArea.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^\d]+/, "");
        });
    }
};

export default calc;