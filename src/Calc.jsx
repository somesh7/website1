import React from 'react';

function add(a,b) {
    let sum = a + b;
    return sum;
    
}

function subs(a,b) {
    let sub1 = a - b;
    return sub1;
}

function mult(a,b ){
    let mult2 = a * b;
    return mult2;
 }
 function divi(a,b) {
     let div3 = a / b;
     div3 = div3.toFixed(2);
     return div3;
 }

export  {add, subs, mult, divi};
