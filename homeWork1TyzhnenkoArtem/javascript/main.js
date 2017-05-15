//   CALCULATOR

//Buttons
var calculator = (function () {
    var firstVariable;
    var secondVariable;
    var operator = "";
    var input;
    var init = function () {
        // Introduction of numbers in a row
        var btn = document.getElementsByClassName('number');
        input = document.getElementsByName('result')[0];
        for (var i = 0; i < btn.length; i++) {
            btn[i].onclick = function (e) {
                input.value += e.target.innerHTML;
            }
        }

        // Onclick buttons operation +, -, *, /
        var operationButtons = document.getElementsByClassName("mathMetod");
        for (var i = 0; i < operationButtons.length; ++i) {
            operationButtons[i].onclick = buttonOperation;
        }

        // Onclick button operation "="
        var eqlButton = document.getElementById("equally");
        eqlButton.onclick = eql;

        //Onclick button operation "C"
        var clearButton = document.getElementById("clr");
        clearButton.onclick = clear;

        // Onclick button operation "."
        var pointButton = document.getElementById("point");
        pointButton.onclick = point;

        // Onclick button operation "+-"
        var plusmnButton = document.getElementById("plusmn");
        plusmnButton.onclick = plusmn;
    };

    //Function of writing an operator and a number in the first variable
    function buttonOperation(e) {
        if (input.value === '') {
            return
        }
        firstVariable = input.value;
        operator = e.target.innerHTML;
        input.value = '';
    }

    //Functions of mathematical calculations
    function calculate() {
        switch (operator) {
            case "+" :
                input.value = +firstVariable + +secondVariable;
                // firstVariable = input.value;
                break;
            case "-":
                input.value = +firstVariable - +secondVariable;
                break;
            case "*":
                input.value = +firstVariable * +secondVariable;
                break;
            case "/":
                if (secondVariable == 0) {
                    input.value = "ОШИБКА!";
                    return;
                }
                input.value = +firstVariable / +secondVariable;
                break;
        }
    }

    //Function of the button is equal to
    function eql() {
        if (input.value === '') {
            return
        }
        secondVariable = input.value;
        input.value = '';
        calculate()
    }

    //Functions Delete button
    function clear() {
        firstVariable = 0;
        secondVariable = 0;
    }
    //Functions point button
    function point(e) {
        if (input.value.indexOf(e.target.innerHTML) === -1 && input.value.length >= 1) {
            input.value += e.target.innerHTML;
        }
    }
    //Functions plusmn button
    function plusmn() {
        input.value *= -1;
    }

    return {
        init: init
    }
}());

calculator.init();