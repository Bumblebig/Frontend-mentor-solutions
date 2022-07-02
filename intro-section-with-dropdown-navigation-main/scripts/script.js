/******** DESKTOP NAVIGATION EVENTS **********/

document.getElementById('features').addEventListener('click', function() {

    dropArrow('arr-down', 'script1');
    document.querySelector('.features').classList.toggle('drop');

});


document.getElementById('company').addEventListener('click', function() {
	
    secDropArrow('arr-down2', 'script2');
    dropDown('comp');

});


/********** MOBILE NAVIGATION EVENTS *****************/

document.querySelector('.feat-parent').addEventListener('click', function() {

    dropArrow('side1', 'script1');
    dropDown('feat-list');
});

document.querySelector('.company-parent').addEventListener('click', function() {
    secDropArrow('side2', 'script2');
    dropDown('company-list');
});



/*********** MENU AND CANCEL ICON EVENTS **********/

document.querySelector('.menu').addEventListener('click', menu);
document.querySelector('.close').addEventListener('click', menu);



/*************** DECLARED FUNCTIONS USED ABOVE *****************/

function menu() {
    document.querySelector('aside').classList.toggle('drop');
}

function dropDown (list) {

    document.getElementById(list).classList.toggle('drop');

}

function dropArrow (side, script) {
    var image = document.getElementById(side);
    var condition = document.getElementById(script);

    if (condition.textContent === 'This is not right but i dont know how else to do it😞😢😔') {

        condition.textContent = 'I can\'t rewrite the variable declared in the global scope';

        image.src = 'images/icon-arrow-up.svg';
    } else{
        image.src = 'images/icon-arrow-down.svg';
        condition.textContent = 'This is not right but i dont know how else to do it😞😢😔';
    }
    
}

function secDropArrow (side, script) {
    var image = document.getElementById(side);
    var condition = document.getElementById(script);

    if (condition.textContent === 'I tried using a boolean in the global scope, apparentli i cannot rewrite the values, i left a comment in the script file, check it.') {

        condition.textContent = 'i just started js a copule of weeks ago';

        image.src = 'images/icon-arrow-up.svg';
    } else{
        image.src = 'images/icon-arrow-down.svg';
        condition.textContent = 'I tried using a boolean in the global scope, apparentli i cannot rewrite the values, i left a comment in the script file, check it.';
    }
    
}

