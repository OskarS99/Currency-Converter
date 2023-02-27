{
     const onFormSubmit = (event) => {

          event.preventDefault();
          let selectOneElement = document.querySelector(".js-selectOne");
          let selectTwoElement = document.querySelector(".js-selectTwo");
          let initialAmountElement = document.querySelector(".js-initialAmount");
          let finalAmountElement = document.querySelector(".js-finalAmount");
          let initialAmount = initialAmountElement.value;

          if (selectOneElement.value === 'PLN' && selectTwoElement.value === 'EUR') {


               let finalAmount = initialAmount * 0.21;
               finalAmountElement.value = finalAmount.toFixed(2);
          } else if (selectOneElement.value === 'PLN' && selectTwoElement.value === 'USD') {
               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 0.22;
               finalAmountElement.value = finalAmount.toFixed(2);

          } else if (selectOneElement.value === 'PLN' && selectTwoElement.value === 'CHF') {
               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 0.21;
               finalAmountElement.value = finalAmount.toFixed(2);
          } else if (selectOneElement.value === 'PLN' && selectTwoElement.value === 'GBP') {
               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 0.19;
               finalAmountElement.value = finalAmount.toFixed(2);

          } else if (selectOneElement.value === 'EUR' && selectTwoElement.value === 'PLN') {

               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 4.76;
               finalAmountElement.value = finalAmount.toFixed(2);
          } else if (selectOneElement.value === 'EUR' && selectTwoElement.value === 'USD') {
               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 1.07;
               finalAmountElement.value = finalAmount.toFixed(2);

          } else if (selectOneElement.value === 'EUR' && selectTwoElement.value === 'CHF') {
               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 0.99;
               finalAmountElement.value = finalAmount.toFixed(2);
          } else if (selectOneElement.value === 'EUR' && selectTwoElement.value === 'GBP') {
               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 0.89;
               finalAmountElement.value = finalAmount.toFixed(2);

          } else if (selectOneElement.value === 'USD' && selectTwoElement.value === 'PLN') {

               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 4.46;
               finalAmountElement.value = finalAmount.toFixed(2);
          } else if (selectOneElement.value === 'USD' && selectTwoElement.value === 'EUR') {
               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 0.94;
               finalAmountElement.value = finalAmount.toFixed(2);

          } else if (selectOneElement.value === 'USD' && selectTwoElement.value === 'CHF') {
               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 0.93;
               finalAmountElement.value = finalAmount.toFixed(2);
          } else if (selectOneElement.value === 'USD' && selectTwoElement.value === 'GBP') {
               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 0.83;
               finalAmountElement.value = finalAmount.toFixed(2);

          } else if (selectOneElement.value === 'CHF' && selectTwoElement.value === 'PLN') {

               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 4.82;
               finalAmountElement.value = finalAmount.toFixed(2);
          } else if (selectOneElement.value === 'CHF' && selectTwoElement.value === 'EUR') {
               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 1.01;
               finalAmountElement.value = finalAmount.toFixed(2);

          } else if (selectOneElement.value === 'CHF' && selectTwoElement.value === 'USD') {
               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 1.08;
               finalAmountElement.value = finalAmount.toFixed(2);
          } else if (selectOneElement.value === 'CHF' && selectTwoElement.value === 'GBP') {
               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 0.90;
               finalAmountElement.value = finalAmount.toFixed(2);
          } else if (selectOneElement.value === 'GBP' && selectTwoElement.value === 'PLN') {

               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 5.36;
               finalAmountElement.value = finalAmount.toFixed(2);
          } else if (selectOneElement.value === 'GBP' && selectTwoElement.value === 'EUR') {
               let initialAmount = initialAmountElement.value; F
               let finalAmount = initialAmount * 1.13;
               finalAmountElement.value = finalAmount.toFixed(2);

          } else if (selectOneElement.value === 'GBP' && selectTwoElement.value === 'CHF') {
               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 1.11;
               finalAmountElement.value = finalAmount.toFixed(2);
          } else if (selectOneElement.value === 'GBP' && selectTwoElement.value === 'USD') {
               let initialAmount = initialAmountElement.value;
               let finalAmount = initialAmount * 1.20;
               
          }
       return finalAmountElement.value = finalAmount.toFixed(2);
     }
   

     const init = () => {
          const formElement = document.querySelector(".js-form");
          formElement.addEventListener("submit", onFormSubmit)
     }
     init();
}
