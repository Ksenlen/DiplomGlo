const getValidation = ({ formID, someElem = [] }) => {
    const form = document.getElementById(formID);
    const statusBlock = document.createElement("div");
    const userPhone = form.querySelector("input[name=phone]");
    const userName = form.querySelector("input[name=fio]");
    const total = document.getElementById("calc-total");
    const errorText = "Ошибка ...";
    const preload = "Подождите, идёт загрузка ...";
    const successText = "Наш менеджер с вами свяжется!";
    const errorValidation = "Данные не валидны...";


    userPhone.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^\+\d]+/, "");
    });

    userName.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Zа-я-А-Я\s]+/, "");
    });

    const validate = () => {
        let successName = true;
        let successPhone = true;
        let success = true;

        if (
            /[а-яёА-ЯЁa-zA-Z\s]+/g.test(userName.value) &&
            userName.value != "" &&
            userName.value.length >= 2
        ) {
            successName = true;
        } else {
            successName = false;
        }

        if (
            /[\d\+]+/g.test(userPhone.value) &&
            userPhone.value.length <= 17 &&
            userPhone.value.length >= 6
        ) {
            successPhone = true;
        } else {
            successPhone = false;
        }
        if (successPhone && successName) {
            success = true;
        } else {
            success = false;
        }

        return success;
    };

    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll("input");
        const formData = new FormData(form);
        const formBody = {};
        statusBlock.innerHTML = preload;
        statusBlock.style.color = 'gray';
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        if (total) {
            someElem.forEach((elem) => {
                const element = document.getElementById(elem.id);

                if (elem.type === "block") {
                    formBody[elem.id] = element.textContent;
                } else if (elem.type === "input") {
                    formBody[elem.id] = element.value;
                }
            });
        }

        if (validate()) {
            sendData(formBody)
                .then((data) => {
                    statusBlock.textContent = successText;
                    formElements.forEach((input) => {
                        if (!(input.name === "page")) {
                            input.value = "";
                        }
                    });

                    setTimeout(() => {
                        statusBlock.textContent = '';
                    }, 3000);
                })
                .catch((error) => {
                    statusBlock.textContent = errorText;
                });
        } else {
            alert("неправильно заполнены данные");
        }
    };

    try {
        if (!form) {
            throw new Error("верните форму на место");
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (validate()) {
                submitForm();

            } else {
                statusBlock.textContent = errorValidation;
            }
        });
    } catch (error) {
        console.log(error.message);
    }
};
export default getValidation;