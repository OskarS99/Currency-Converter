let selectOneElement = document.querySelector(".js-selectOne");
let selectTwoElement = document.querySelector(".js-selectTwo");
let initialAmountElement = document.querySelector(".js-initialAmount");
let finalAmountElement = document.querySelector(".js-finalAmount");
let formElement = document.querySelector(".js-form");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();



    let selectOne = selectOneElement.value;
    let selectTwo = selectTwoElement.value;
    let initialAmount = initialAmountElement.value;


    switch (selectOne && selectOne) {
        case 'PLN' && 'USD':
            let finalAmount = initialAmount * 0.21;
            finalAmountElement.value = finalAmount.toFixed(2);
            break;

        case 'PLN' && 'EUR':
            let finalAmount = initialAmount * 0.21;
            finalAmountElement.value = finalAmount.toFixed(2);
            break;

    }

})