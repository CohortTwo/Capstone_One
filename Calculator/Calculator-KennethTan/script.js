function click_button(id) {

    first_text = document.getElementById('first_text');
    second_text = document.getElementById('second_text');
    thirdS_text = document.getElementById('third_text');

    first_value = Number(first_text.value);
    second_value = second_text.value;
    third_value = Number(third_text.value);

    button_value = document.getElementById(id).value;

    if (isValidNumber(button_value) == false) {

    } else if (button_value == 'CE') {
        third_text.value = "";
        second_text.value = "";
        first_text.value = "";

    } else if (button_value == '<-') {
    first_text.value = first_text.value.slice(0,-1);




    } else if (isSign(button_value) == true) {

        third_text.value = first_text.value;
        second_text.value = button_value;
        first_text.value = "";
    } else if ((second_value == '+' && id == '=')
        && (first_value != '' && third_value != '')) {

        third_text.value = '';
        second_text.value = '';
        first_text.value = add(first_value, third_value);
    }


    else if ((second_value == '-' && id == '=')
    && (first_value != '' && third_value != '')) {

    third_text.value = '';
    second_text.value = '';
    first_text.value = subtract(first_value, third_value);
}

    else if ((second_value == '/' && id == '=')
        && (first_value != '' && third_value != '')) {

        third_text.value = '';
        second_text.value = '';
        first_text.value = divide(first_value, third_value);
    }

    else if ((second_value == '*' && id == '=')
        && (first_value != '' && third_value != '')) {

        third_text.value = '';
        second_text.value = '';
        first_text.value = multiply(first_value, third_value);
    }



     else {
        first_text.value += button_value;

    }

}


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num2-num1
}

function divide(num1, num2) {
    return num2 / num1;
}

function multiply(num1, num2) {
    return num2 * num1;
}

/*
function plusMinus(num1, num2) {
    if ((num2-num1) > 0) {
        return (num2 + num1);
    } else {        
        return (num2 - num1);
    }
        
}
*/

function isSign(id) {

    if (id == '+' || id == '-' || id == '/' || id == '*' || id == '%' || id == '+-') {

        return true;
    } else {
        return false;
    }

}



function isValidNumber(number) {

    try {
        return eval(number)
    } catch (err) {

    }





}