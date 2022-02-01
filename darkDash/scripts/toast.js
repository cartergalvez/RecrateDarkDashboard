let toastTl = document.getElementById('ToastTl');
let toastBtnTl = document.getElementById('ToastBtnTl');
let toastTc = document.getElementById('ToastTc');
let toastBtnTc = document.getElementById('ToastBtnTc');
let toastTr = document.getElementById('ToastTr');
let toastBtnTr = document.getElementById('ToastBtnTr');
let toastBl = document.getElementById('ToastBl');
let toastBtnBl = document.getElementById('ToastBtnBl');
let toastBc = document.getElementById('ToastBc');
let toastBtnBc = document.getElementById('ToastBtnBc');
let toastBr = document.getElementById('ToastBr');
let toastBtnBr = document.getElementById('ToastBtnBr');



toastBtnTl.addEventListener('click' ,function (e){
    toastTl.classList.remove('display-alert');
})

toastBtnTc.addEventListener('click' ,function (e){
    toastTc.classList.remove('display-alert');
})

toastBtnTr.addEventListener('click' ,function (e){
    toastTr.classList.remove('display-alert');
})

toastBtnBl.addEventListener('click' ,function (e){
    toastBl.classList.remove('display-alert');
})

toastBtnBc.addEventListener('click' ,function (e){
   toastBc.classList.remove('display-alert');
})

toastBtnBr.addEventListener('click' ,function (e){
    toastBr.classList.remove('display-alert');
})

let closeBtnTl = document.getElementById('closeBtnTl');
let closeBtnTc = document.getElementById('closeBtnTc');
let closeBtnTr = document.getElementById('closeBtnTr');
let closeBtnBl = document.getElementById('closeBtnBl');
let closeBtnBc = document.getElementById('closeBtnBc');
let closeBtnBr = document.getElementById('closeBtnBr');

closeBtnTl.addEventListener('click', function (e){
    toastTl.classList.add('display-alert')
})

closeBtnTc.addEventListener('click', function (e){
    toastTc.classList.add('display-alert')
})

closeBtnTr.addEventListener('click', function (e){
    toastTr.classList.add('display-alert')
})

closeBtnBl.addEventListener('click', function (e){
    toastBl.classList.add('display-alert')
})

closeBtnBc.addEventListener('click', function (e){
    toastBc.classList.add('display-alert')
})

closeBtnBr.addEventListener('click', function (e){
    toastBr.classList.add('display-alert')
})
