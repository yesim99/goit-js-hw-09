"use strict";

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const formData = {
    email: "",
    message: "",
};

const getData = JSON.parse(localStorage.getItem(localStorageKey));
const email = getData.email || "";
const message = getData.message || "";

Yani:
//form.elements.email.value = localStorage.getItem(localStorageKey) ?? "";
//form.elements.message.value = localStorage.getItem(localStorageKey)
//  ?? "";

form.addEventListener("input", (event) => {
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    localStorage.removeItem(localStorageKey);//fonksiyonun içinde yazılmalı
    form.reset();//fonksiyonun içine yazılmalı

});

console.log(formData);
