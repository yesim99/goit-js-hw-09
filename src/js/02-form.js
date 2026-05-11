"use strict";

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const formData = {
    email: "",
    message: "",
};
//verileri alır
const getData = JSON.parse(localStorage.getItem(localStorageKey));

const email = (getData && getData.email) || "";
const message = (getData && getData.message) || "";


form.elements.email.value = email;
form.elements.message.value = message;

form.addEventListener("input", () => {
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

//formData.email = form.elements.email.value.trim();
//formData.message = form.elements.message.value.trim();

//localStorage.setItem(localStorageKey, JSON.stringify(formData));

//form.addEventListener("input", (event) => {
//  localStorage.setItem(localStorageKey, JSON.stringify(formData));
//});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (email === "" || message === "") {
        alert("");
        return;
    }
    localStorage.removeItem(localStorageKey);//fonksiyonun içinde yazılmalı
    form.reset();//fonksiyonun içine yazılmalı
    console.log({ email, message });
});



