var answers = {
    "tag": "<a>",
    "list": "<ol>",
    "inform": "<meta />",
    "table": ["<td/>", "<caption>"],
    "form": ["autocomplete", "action"]
};

//   TEST
var test = (function (answers) {
            var points = 0;
            var init = function () {
                var result = document.getElementById("result");
                result.onclick = checkAnswers;
            };

            function checkAnswers() {
                points = 0;
                for (var key in answers) {
                    var question = document.getElementsByName(key);
                    if (question[0].type == "radio") {
                        radio(question, key);
                    } else {
                        checkeBox(question, key);
                    }
                }
                res();
            }

            function radio(question, key) {
                for (var i = 0; i < question.length; i++) {
                    if (question[i].checked && question[i].value === answers[key]) {
                        points += 10;
                    } else {
                        points += 0;
                    }
                }
            }

            function checkeBox(question, key ) {
                for (var i = 0; i < question.length; i++) {
                    if (question[i].checked) {
                        if(answers[key].indexOf(question[i].value) !== -1){
                            points += 5;
                        } else {
                            points -= 5;
                        }
                    }
                }
            }

            function res() {

                var answersPercent = (points * 100) / 50;
                alert("Ваш результат: " + points + "\n" + "Проценты: " + answersPercent);
            }

            return {
                init: init
            }
        }
        (answers)
    );

test.init();
