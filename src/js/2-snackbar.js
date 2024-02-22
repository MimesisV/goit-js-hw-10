import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

const delayInput = document.querySelector('input[name="delay"]');
const form = document.querySelector('form');

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    const checkedRadioButtons = document.querySelector('input[name="state"]:checked');
    const inputValue = delayInput.value;

    if (inputValue <= 0) {
        iziToast.error({
            message: 'Please enter a valid delay in milliseconds.',
            position: "topRight",
        });
        return;
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout (()=>{
            if (checkedRadioButtons.value === "fulfilled") {
                resolve(inputValue)
            } else {
                reject(inputValue)
            }
        }, inputValue)
    })

    promise
        .then((delay) => {
            iziToast.show({
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: "topRight",
            });
        })
        .catch((delay) => {
            iziToast.error({
                message: `❌ Rejected promise in ${delay}ms`,
                position: "topRight",
            });
        })
})

