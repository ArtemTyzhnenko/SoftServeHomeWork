var answers = {
    "tag": "<a>",
    "list": "<ol>",
    "inform": "<meta />"
};

//   TEST
var test = (function (answers) {
    var mas = [];
    var point = 0;
    var firstPoints;
    var secondPoints;
    var thirdPoints;
    var fourthPoints;
    var fifthPoints;
    var init = function () {
        var result = document.getElementById("result");
        result.onclick = res;
    };

    // ПОПЫТАТЬСЯ СДЕЛАТЬ ЧЕРЕЗ ОБЪЕКТ
    // function checkAnswers() {
    //     for(var key in answers){
    //         var firstQuestion = document.getElementsByName("tag");
    //         var secondQuestion =
    //
    //         console.log(answers[key])
    //     }
    // }
    function firstQuestion() {
        var input = document.getElementsByName("tag");
        for (var i = 0; i < input.length; i++) {
            if (input[i].type == "radio" && input[i].checked) {
                if (input[i].value == "<a>") {
                    firstPoints = 10;
                    return firstPoints;
                } else {
                    firstPoints = 0;
                    return firstPoints;
                }
            }
        }
    }

    function secondQuestion() {
        var input = document.getElementsByName("list");
        for (var i = 0; i < input.length; i++) {
            if (input[i].type == "radio" && input[i].checked) {
                if (input[i].value == "<ol>") {
                    secondPoints = 10;
                    return secondPoints;
                } else {
                    secondPoints = 0;
                    return secondPoints;
                }
            }
        }
    }

    function thirdQuestion() {
        var input = document.getElementsByName("inform");
        for (var i = 0; i < input.length; i++) {
            if (input[i].type == "radio" && input[i].checked) {
                if (input[i].value == "<meta />") {
                    thirdPoints = 10;
                    return thirdPoints;
                } else {
                    thirdPoints = 0;
                    return thirdPoints;
                }
            }
        }
    }

    function fourthQuestion() {
        var correctAnswers=0;
        var input = document.getElementsByName("table");
        for (var i = 0; i < input.length; i++) {
            if (input[i].type == "checkbox" && input[i].checked) {
                if (input[i].value == "<td>" || input[i].value == "<caption>") {
                    correctAnswers += 1;
                }else {
                    correctAnswers -= 1;
                }
            }
        }
        return correctAnswers * 5;
    }

    function fifthQuestion() {
        var correctAnswers=0;
        var input = document.getElementsByName("form");
        for (var i = 0; i < input.length; i++) {
            if (input[i].type == "checkbox" && input[i].checked) {
                if (input[i].value == "autocomplete" || input[i].value == "action") {
                    correctAnswers += 1;
                }else {
                    correctAnswers -= 1;
                }
            }
        }
        return correctAnswers * 5;
    }

    function res() {
        var x = firstQuestion() + secondQuestion() + thirdQuestion() + fourthQuestion() + fifthQuestion();
        var answersPercent = (x*100)/50;
        alert("Ваш результат: " + x);
        alert("Проценты: " + answersPercent)
    }

    return {
        init: init
    }
}(answers));

test.init();
