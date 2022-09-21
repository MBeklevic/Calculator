
const inputArea = document.getElementById("input"); //Sayıların yazıldığı ekranı seçiyoruz.
const ops = document.getElementById("ops"); //Matematiksel ifadelerin olduğu divi seçiyoruz.
const numbers = document.getElementById("calcbody"); //Sayıların olduğu divi seçiyoruz.
const equal = document.getElementById("equalsign"); //Eşittir işaretini seçiyoruz.

ops.addEventListener("click", addOpsToInput); //Matematiksel ifadeleri input yazmak için eventlistener ekliyoruz.
numbers.addEventListener("click", addNumberToInput); //Aynı şekilde sayıları yazmak için de eventlistener ekliyoruz.

function addOpsToInput(e) {
    if (e.target.textContent === '×') {
        inputArea.value = inputArea.value + "*";

    }
    else if (e.target.textContent === "÷") {
        inputArea.value = inputArea.value + "/";
    }
    else {
        inputArea.value = inputArea.value + e.target.textContent;
    }
}
function addNumberToInput(e) {
    if (e.target.textContent === "AC") { //AC ye tıkladığımızda input alanını temizliyoruz.
        inputArea.value = "";
    }
    else if (e.target.textContent === "=") { //Eşittire tıkladığımızda calculate fonksiyonunu çalıştırıp input alanını temizliyoruz.
        // calculate();
        let outCome = inputArea.value;
        outCome = eval(outCome);
        console.log(outCome);
        inputArea.value = outCome; //Sonucu input a yazmak için calculate fonksiyonunu içeride yazdım.
    }
    else if (e.target.textContent.length > 1) {
        // Div deki boşluklara tıkladığımızda bütün textContent i yazmasını istemediğimiz için bu mantıksal durumu belirtip boş bıraktım.
    }
    else {
        inputArea.value = inputArea.value + e.target.textContent;

    }
    e.preventDefault();
};

// function calculate() {
//     let outCome = inputArea.value;
//     outCome = eval(outCome);
//     console.log(eval(outCome));
// }