import React from 'react';


let state = '';

function setState(input){
state = input;
}



function getState(){
    return state;
}

export {getState, setState};