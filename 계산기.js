let total;
/****************************************************************** 숫자 입력 */
function number1() {
    const result = document.getElementById("result");
    // 입력된 첫글자가 0이거나 직전에 계산을 완료한 경우 숫자 초기화
    if(cal.value[cal.value.length-2] == "="){
        cal.value = "";
        result.value = document.getElementById("1").value;
    } else if (result.value == 0 && result.value.indexOf(".") == -1) {
        result.value = document.getElementById("1").value;
    } else {
        result.value += document.getElementById("1").value;
    }
}
function number2() {
    const result = document.getElementById("result");
    if(cal.value[cal.value.length-2] == "="){
        cal.value = "";
        result.value = document.getElementById("2").value;
    } else if (result.value == 0 && result.value.indexOf(".") == -1) {
        result.value = document.getElementById("2").value;
    } else {
        result.value += document.getElementById("2").value;
    }
}
function number3() {
    if(cal.value[cal.value.length-2] == "="){
        cal.value = "";
        result.value = document.getElementById("3").value;
    } else if (result.value == 0 && result.value.indexOf(".") == -1) {
        result.value = document.getElementById("3").value;
    } else {
        result.value += document.getElementById("3").value;
    }
}
function number4() {
    const result = document.getElementById("result");
    if(cal.value[cal.value.length-2] == "="){
        cal.value = "";
        result.value = document.getElementById("4").value;
    } else if (result.value == 0 && result.value.indexOf(".") == -1) {
        result.value = document.getElementById("4").value;
    } else {
        result.value += document.getElementById("4").value;
    }
}
function number5() {
    const result = document.getElementById("result");
    if(cal.value[cal.value.length-2] == "="){
        cal.value = "";
        result.value = document.getElementById("5").value;
    } else if (result.value == 0 && result.value.indexOf(".") == -1) {
        result.value = document.getElementById("5").value;
    } else {
        result.value += document.getElementById("5").value;
    }
}
function number6() {
    const result = document.getElementById("result");
    if(cal.value[cal.value.length-2] == "="){
        cal.value = "";
        result.value = document.getElementById("6").value;
    } else if (result.value == 0 && result.value.indexOf(".") == -1) {
        result.value = document.getElementById("6").value;
    } else {
        result.value += document.getElementById("6").value;
    }
}
function number7() {
    const result = document.getElementById("result");
    if(cal.value[cal.value.length-2] == "="){
        cal.value = "";
        result.value = document.getElementById("7").value;
    } else if (result.value == 0 && result.value.indexOf(".") == -1) {
        result.value = document.getElementById("7").value;
    } else {
        result.value += document.getElementById("7").value;
    }
}
function number8() {
    const result = document.getElementById("result");
    if(cal.value[cal.value.length-2] == "="){
        cal.value = "";
        result.value = document.getElementById("8").value;
    } else if (result.value == 0 && result.value.indexOf(".") == -1) {
        result.value = document.getElementById("8").value;
    } else {
        result.value += document.getElementById("8").value;
    }
}
function number9() {
    const result = document.getElementById("result");
    if(cal.value[cal.value.length-2] == "="){
        cal.value = "";
        result.value = document.getElementById("9").value;
    } else if (result.value == 0 && result.value.indexOf(".") == -1) {
        result.value = document.getElementById("9").value;
    } else {
        result.value += document.getElementById("9").value;
    }
}
// 값이 0이면 0을 더 입력할 수 없지만 만약 소수점이라면 더 입력 가능
function number0() {
    const result = document.getElementById("result");
    if(cal.value[cal.value.length-2] == "="){
        cal.value = "";
        result.value = document.getElementById("0").value;
    } else if (result.value == 0 && result.value.indexOf(".") == -1) {
        result.value = document.getElementById("0").value;
    } else {
        result.value += document.getElementById("0").value;
    }
}
function dot() {
    const result = document.getElementById("result");
    // 숫자내에 이미 .이 포함되어 있으면 .입력 불가능
    if(result.value.indexOf(".") != -1) {
        alert("한 숫자에 .을 여러번 입력할 수 없습니다.")
        return;
    }

    // 입력된 글자가 숫자가 아니라면 '.'입력 불가능
    if((result.value[result.value.length-1] >= '0' && result.value[result.value.length-1] <= '9')) {
        result.value += document.getElementById("dot").value;
    } else {
        
    }
}
/*********************************************************** 숫자 지우기 */
function backspace() {
    result.value = result.value.slice(0,result.value.length-1);
}
function Clear() {
    total = "";
    cal.value = total;
    result.value = "";
}
/************************************************************** 연산자 입력 */
function operP() {
    // 부호로 입력된 -나 입력받지 않는 상태에서 입력 불가
    if(result.value=='-' || result.value == "")return;
    const cal = document.getElementById("cal");
    total = result.value + " + ";
    cal.value = total;
    result.value = "";
}
function operM() {
    // 마이너스값 입력 가능하게 하기 위해 첫번째 누르는 - 는 부호로 작용
    if(result.value == "" ){
        result.value = "-";
    }else {
        if(result.value=='-' || result.value == "")return;
        const cal = document.getElementById("cal");
        total = result.value + " - ";
        cal.value = total;
        result.value = "";
    }
}
function operX() {
    if(result.value=='-' || result.value == "")return;
    const cal = document.getElementById("cal");
    total = result.value + " X ";
    cal.value = total;
    result.value = "";
}
function operD() {
    if(result.value=='-' || result.value == "")return;
    const cal = document.getElementById("cal");
    total = result.value + " / ";
    cal.value = total;
    result.value = "";
}
function operPer() {
    if(result.value=='-' || result.value == "")return;
    result.value = result.value/100;
}
/******************************************************************** 계산 */
function calculate() {
    // 연산식 후 바로 선택 불가
    if (result.value == "")return;

    // = 이후 또 = 을 선택시 결과값에 직전 수행 연산 반복
    if(cal.value[cal.value.length-2] == "="){
        switch (total.split(" ")[1]) {
            case "+" :
                document.getElementById("history").innerText += result.value + " + " + total.split(" ")[2] + " = " 
                                + "\n"+ (eval(result.value) + eval(total.split(" ")[2])) + "\n\n"; 
                cal.value = result.value + " + " + total.split(" ")[2] + " = ";
                result.value = eval(result.value) + eval(total.split(" ")[2]);
                break;
            case "-" :
                document.getElementById("history").innerText += result.value + " - " + total.split(" ")[2] + " = " 
                                + "\n"+ (eval(result.value) - eval(total.split(" ")[2])) + "\n\n"; 
                cal.value = result.value + " - " + total.split(" ")[2] + " = ";
                result.value = eval(result.value) - eval(total.split(" ")[2]);
                break;
            case "X" :
                document.getElementById("history").innerText += result.value + " X " + total.split(" ")[2] + " = " 
                                + "\n"+ (eval(result.value) * eval(total.split(" ")[2])) + "\n\n"; 
                cal.value = result.value + " X " + total.split(" ")[2] + " = ";
                result.value = eval(result.value) * eval(total.split(" ")[2]);
                break;
            case "/" :
                document.getElementById("history").innerText += result.value + " / " + total.split(" ")[2] + " = " 
                                + "\n"+ (eval(result.value) / eval(total.split(" ")[2])) + "\n\n"; 
                cal.value = result.value + " / " + total.split(" ")[2] + " = ";
                result.value = eval(result.value) / eval(total.split(" ")[2]);
                break;
        }
    // 앞에 입력한 식이 있는 경우만        
    } else if (!cal.value == "") {
        // 문자열에 포함된 연산식에 따라 연산
        switch (total.split(" ")[1]) {
            case "+" :
                document.getElementById("history").innerText += total + result.value + " = " 
                                + "\n"+ (eval(total.split(" ")[0]) + eval(result.value)) + "\n\n";
                total += result.value + " = ";
                cal.value = total;
                result.value = eval(total.split(" ")[0]) + eval(result.value);
                break;
            case "-" :
                document.getElementById("history").innerText += total + result.value + " = " 
                                + "\n"+ (eval(total.split(" ")[0]) - eval(result.value)) + "\n\n"; 
                total += result.value + " = ";
                cal.value = total;
                result.value = eval(total.split(" ")[0]) - eval(result.value);
                break;
            case "X" :
                document.getElementById("history").innerText += total + result.value + " = " 
                                + "\n"+ (eval(total.split(" ")[0]) * eval(result.value)) + "\n\n"; 
                total += result.value + " = ";
                cal.value = total;
                result.value = eval(total.split(" ")[0]) * eval(result.value);
                break;
            case "/" :
                document.getElementById("history").innerText += total + result.value + " = "
                                + "\n"+ (eval(total.split(" ")[0]) / eval(result.value)) + "\n\n";
                total += result.value + " = ";
                cal.value = total;
                result.value = eval(total.split(" ")[0]) / eval(result.value);
                break;
        }
    }
    // 입력된 히스토리의 스크롤을 항상 아래로 유지!! 
    /* (scorllTop은 가장 윗부분이며 0을 의미, 이에 크기를 넣으면 그 위치로 스크롤이 되는데,
        여기서 scrollHeight라는 스크롤의 총 크기를 넣어 스크롤이 항상 아래로 가게 할 수 있다.) */
    document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;
}
/**************************************************계산기록 삭제 */
function delHis() {
    document.getElementById("history").innerText = "";
}