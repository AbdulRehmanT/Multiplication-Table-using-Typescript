"use strict";
const submitBtn = document.querySelector('.submit-btn');
const resetBtn = document.querySelector('.reset-btn');
const result = document.querySelector('.result-container');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const inputValue = document.querySelector('.input-form');
    const input = Number(inputValue.value);
    result.innerHTML = "";
    result.innerHTML = `<h2>Table of ${input}</h2>`;
    for (let i = 1; i <= 12; i++) {
        result.innerHTML += `<p>${input} x ${i} = ${input * i}</p>`;
    }
});
resetBtn.addEventListener('click', (event) => {
    result.innerHTML = "";
});
