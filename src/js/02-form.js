"use strict";

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
form.elements.email.value = localStorage.getItem(localStorageKey) ?? "";
form.elements.message.value = localStorage.getItem(localStorageKey)
    ?? "";

form.addEventListener("input", (event) => {
    localStorage.setItem(localStorageKey, event.target.value);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
});

localStorage.removeItem(localStorageKey);
form.reset();
