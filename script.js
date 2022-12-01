"use strict";

//* Access the values of the elements

const v1 = document.getElementById('unit1');                    //! for selecting --> from option
const v2 = document.getElementById('unit2');                    //! for selecting --> to option
const enterValue = document.getElementById('setVal');               //! for selecting --> Enter value
const outputValue = document.getElementById('getVal');              //! for selecting --> Output value
const convert = document.getElementById('clickToConvert');          //! for selecting --> Convert Button
const swap = document.getElementById('swapbtn');                    //! for selecting --> swap button
const reset = document.getElementById('resetbtn');                     //! for selecting --> reset button
outputValue.disabled =true;


//?--------------------------------------------------------------------------------------------------------->

//  d event on convert button

//   for converting from Binary to Decimal format

convert.addEventListener('click', ()=>{
    let val1 = +v1.value;
    let val2 = +v2.value;
    console.log("text");

    if(val1 == 2 && val2 == 10){
        let text = enterValue.value;
        if(!isNaN(Number('0B' + text))){
            let convert = (parseInt(text, 2));
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//   for converting from Binary to Octal

convert.addEventListener('click', ()=>{
    let val1 = +v1.value;
    let val2 = +v2.value;
    // console.log("text");

    if(val1 == 2 && val2 == 8){
        let text = enterValue.value;
        if(!(Number.isNaN('0B'+text))){
            let convert = (parseInt(text, 2)).toString(8);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//   for converting from Binary to Hexadecimal

convert.addEventListener('click', ()=>{
    let val1 = +v1.value;
    let val2 = +v2.value;
    console.log("text");

    if(val1 == 2 && val2 == 16){
        let text = enterValue.value;
        if(!(Number.isNaN('0B'+text))){
            let convert = (parseInt(text, 2)).toString(16);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//   for converting from Hexadecimal to Binary

convert.addEventListener('click', ()=>{
    let val1 = +v1.value;
    let val2 = +v2.value;
    console.log("text");

    if(val1 == 16 && val2 == 2){
        let text = enterValue.value;
        if(!(Number.isNaN('0x'+text))){
            let convert = (parseInt(text, 16)).toString(2);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//   for converting from Hexadecimal to Decimal

convert.addEventListener('click', ()=>{
    let val1 = +v1.value;
    let val2 = +v2.value;
    console.log("text");

    if(val1 == 16 && val2 == 10){
        let text = enterValue.value;
        if(!(Number.isNaN('0x'+text))){
            let convert = (parseInt(text, 16));
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//   for converting from Hexadecimal to Octal

convert.addEventListener('click', ()=>{
    let val1 = +v1.value;
    let val2 = +v2.value;
    console.log("text");

    if(val1 == 16 && val2 == 8){
        let text = enterValue.value;
        if(!(Number.isNaN('0x'+text))){
            let convert = (parseInt(text, 16)).toString(8);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//   for converting from Decimal to Binary

convert.addEventListener('click', ()=>{
    let val1 = +v1.value;
    let val2 = +v2.value;
    console.log("text");

    if(val1 == 10 && val2 == 2){
        let text = enterValue.value;
        if(!isNaN(text)){
            let convert = (parseInt(text, 10)).toString(2);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//   for converting from Decimal to Octal

convert.addEventListener('click', ()=>{
    let val1 = +v1.value;
    let val2 = +v2.value;
    console.log("text");

    if(val1 == 10 && val2 == 8){
        let text = enterValue.value;
        if(!isNaN(text)){
            let convert = (parseInt(text, 10)).toString(8);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//   for converting from Decimal to Hexadecimal

convert.addEventListener('click', ()=>{
    let val1 = +v1.value;
    let val2 = +v2.value;
    console.log("text");

    if(val1 == 10 && val2 == 16){
        let text = enterValue.value;
        if(!isNaN(text)){
            let convert = (parseInt(text, 10)).toString(16);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//  . for converting from Octal to Binary

convert.addEventListener('click', ()=>{
    let val1 = +v1.value;
    let val2 = +v2.value;
    console.log("text");

    if(val1 == 8 && val2 == 2){
        let text = enterValue.value;
        if(!(Number.isNaN('0O'+text))){
            let convert = (parseInt(text, 8)).toString(2);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//  . for converting from Octal to Decimal

convert.addEventListener('click', ()=>{
    let val1 = +v1.value;
    let val2 = +v2.value;
    console.log("text");

    if(val1 == 8 && val2 == 10){
        let text = enterValue.value;
        if(!(Number.isNaN('0O'+text))){
            let convert = (parseInt(text, 8));
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//  .for converting from Octal to Hexadecimal

convert.addEventListener('click', ()=>{
    let val1 = +v1.value;
    let val2 = +v2.value;
    console.log("text");

    if(val1 == 8 && val2 == 16){
        let text = enterValue.value;
        if(!(Number.isNaN('0O'+text))){
            let convert = (parseInt(text, 8)).toString(16);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});


//?------------------------------------------------------------------------------------->

//  d Event on Swap Button

swapbtn.addEventListener('click', ()=>{
    let changeTo = v2.value;
    let changeFrom = v1.value;
    v1.value = changeTo;
    v2.value = changeFrom;

    let inputFrom = enterValue.value;
    let inputTo = outputValue.value;
    outputValue.value = inputFrom;
    enterValue.value = inputTo;
});

//?------------------------------------------------------------------------------------->

//  d Event on Reset Button

reset.addEventListener("click", ()=>{
    outputValue.value = "";
    enterValue.value = "";
  });