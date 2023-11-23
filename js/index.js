function factorial(n) {
    if (n === 1 || n === 0){
        return 1n;
    } else {
    return BigInt(BigInt(n) * factorial(n - 1));
}
}
function factorialFromTo(n, k) {
    if (n === 1 || n === 0){
        return 1n;
    } else {
        if (n > k) {
            return BigInt(n) * BigInt(factorialFromTo(n - 1, k));
        }else {
            return 1;
        }
    }
}
function razmsWithPovtr(n, k){
    if (k === 1){
        return BigInt(n);
    }else {
        let temp = BigInt(razmsWithPovtr(n, Math.floor(k / 2)));
        if (k % 2 === 0) {
            return temp * temp;
        }
        if (k % 2 === 1) {
            return BigInt(n) * temp * temp;
        }
    }
}
function comb(n, k){
    return BigInt(factorialFromTo(n, n-k)/factorial(k));
}
function combWithPovtr(n, k) {
    return BigInt(comb((k+n-1), k));
}
const formForFactorial = document.getElementById("form-for-factorial");
const answer = document.getElementById("answer");
const inputForFactorial = document.getElementById("input-for-factorial");
const placeForForm = document.getElementById("place-for-form");
const factorialBtn = document.getElementById("factorial");
const razmshBtn = document.getElementById("razmesh");
const perestanBtn = document.getElementById("perestan");
const perestansPvtBtn = document.getElementById("perestansPvt");
const CombBtn = document.getElementById("combinations");
const UrnBtn = document.getElementById("urn");
const UrnsrBtn = document.getElementById("urnsr");
formForFactorial.addEventListener("submit", (event) => {
    event.preventDefault();
    answer.innerText = "Ответ: " + factorial(inputForFactorial.value);
})
razmshBtn.addEventListener("click", (event) => {
    placeForForm.innerHTML = '<form class="form" id="form-for-razmsh">\n' +
        '    <label for="form-for-razmsh">Размещения</label><p></p>\n' +
        '    <label for="input-for-razmsh-k">K</label><p></p>\n' +
        '    <input type="number" class="input" id="input-for-razmsh-k" placeholder="k"><p></p>\n' +
        '    <label for="input-for-razmsh-n">N</label><p></p>\n' +
        '    <input type="number" class="input" id="input-for-razmsh-n" placeholder="n"><p></p>\n' +
        '    <label for="input-for-razmsh-n">С повторениями</label>\n' +
        '    <input type="checkbox" class="input" id="povtor"><p></p>\n' +
        '    <button type="submit">Вычислить</button><p></p>\n' +
        '    <div id="answer" class="answer"></div>\n' +
        '</form>'
    const razmN = document.getElementById("input-for-razmsh-n");
    const razmK = document.getElementById("input-for-razmsh-k");
    const razmPovt = document.getElementById("povtor");
    const answer = document.getElementById("answer");
    const formForRazms = document.getElementById("form-for-razmsh");
    formForRazms.addEventListener("submit", (event) => {
        event.preventDefault();
        let k = Number(razmK.value);
        let n = Number(razmN.value);
            if (razmPovt.checked) {
                answer.innerText = "Ответ: " + razmsWithPovtr(n, k);
            } else {
                if (k > n) {
                    alert("k не может быть больше n");
                    answer.innerText = "";
                }else {
                let a = factorialFromTo(n, n-k);
                answer.innerText = "Ответ: " + a;
            }
        }
    })
})
CombBtn.addEventListener("click", (event) => {
    placeForForm.innerHTML = '<form class="form" id="form-for-comb">\n' +
        '    <label for="form-for-comb">Сочетания</label><p></p>\n' +
        '    <label for="input-for-comb-k">K</label><p></p>\n' +
        '    <input type="number" class="input" id="input-for-comb-k" placeholder="k"><p></p>\n' +
        '    <label for="input-for-comb-n">N</label><p></p>\n' +
        '    <input type="number" class="input" id="input-for-comb-n" placeholder="n"><p></p>\n' +
        '    <label for="input-for-comb-n">С повторениями</label>\n' +
        '    <input type="checkbox" class="input" id="povtor"><p></p>\n' +
        '    <button type="submit">Вычислить</button><p></p>\n' +
        '    <div id="answer" class="answer"></div>\n' +
        '</form>'
    const combN = document.getElementById("input-for-comb-n");
    const combK = document.getElementById("input-for-comb-k");
    const combPovt = document.getElementById("povtor");
    const answer = document.getElementById("answer");
    const formForcomb = document.getElementById("form-for-comb");
    formForcomb.addEventListener("submit", (event) => {
        event.preventDefault();
        let k = Number(combK.value);
        let n = Number(combN.value);

            if (combPovt.checked) {
                answer.innerText = "Ответ: " + combWithPovtr(n, k);
            } else {
                if (k > n) {
                alert("k не может быть больше n");
                answer.innerText = "";
            } else {
                let a = comb(n, k);
                answer.innerText = "Ответ: " + a;
            }
        }
    })
})
UrnBtn.addEventListener("click", (event) => {
    placeForForm.innerHTML = '<form class="form" id="form-for-urn">\n' +
        '    <label for="form-for-urn">Урновая модель</label><p></p>\n' +
        '    <label for="input-for-urn-k">Извлекается</label><p></p>\n' +
        '    <input type="number" class="input" id="input-for-urn-k" placeholder="k"><p></p>\n' +
        '    <label for="input-for-urn-n">Меченных</label><p></p>\n' +
        '    <input type="number" class="input" id="input-for-urn-m" placeholder="m"><p></p>\n' +
        '    <label for="input-for-urn-n">Всего</label><p></p>\n' +
        '    <input type="number" class="input" id="input-for-urn-n" placeholder="n"><p></p>\n' +
        '    <button type="submit">Вычислить</button><p></p>\n' +
        '    <div id="answer" class="answer"></div>\n' +
        '</form>'
    const urnN = document.getElementById("input-for-urn-n");
    const urnK = document.getElementById("input-for-urn-k");
    const urnM = document.getElementById("input-for-urn-m");
    const answer = document.getElementById("answer");
    const formForurn = document.getElementById("form-for-urn");
    formForurn.addEventListener("submit", (event) => {
        event.preventDefault();
        let k = Number(urnK.value);
        let n = Number(urnN.value);
        let m = Number(urnM.value);
        if (m > n) {
            alert("m не может быть больше n");
            answer.innerText = "";
        } else {
            if (k > m) {
                alert("k не может быть больше m");
                answer.innerText = "";
            } else {
                    let a = comb(m, k);
                    let b = comb(n, k);
                    answer.innerText = "Ответ: " + a +' /\n'+ b;
                }
            }
    })
})
perestanBtn.addEventListener("click", (event) => {
    placeForForm.innerHTML = '<form class="form" id="form-for-perestan">\n' +
        '    <label for="form-for-perestan">Перестановки</label><p></p>\n' +
        '    <label for="input-for-perestan-n">N</label><p></p>\n' +
        '    <input type="number" class="input" id="input-for-perestan-n" placeholder="n"><p></p>\n' +
        '    <button type="submit">Вычислить</button><p></p>\n' +
        '    <div id="answer" class="answer"></div>\n' +
        '</form>'
    const perestanN = document.getElementById("input-for-perestan-n");
    const answer = document.getElementById("answer");
    const formForPerestan = document.getElementById("form-for-perestan");
    formForPerestan.addEventListener("submit", (event) => {
        event.preventDefault();
        let n = Number(perestanN.value);
                let a = factorial(n);
                answer.innerText = "Ответ: " + a;
    })
})
perestansPvtBtn.addEventListener("click", (event) =>{
    placeForForm.innerHTML = '<form class="form" id="form-for-perestansPvt">\n' +
        '    <label for="form-for-perestansPvt">Перестановки с повторением</label><p></p>\n' +
        '    <label for="input-for-perestansPvt-k">Количество типов объектов</label><p></p>\n' +
        '    <input type="number" class="input" id="input-for-perestansPvt-k" placeholder="k" value="0"><p></p>\n' +
        '    <div id="types"></div><p></p>\n' +
        '    <button type="submit">Вычислить</button><p></p>\n' +
        '    <div id="answer" class="answer"></div>\n' +
        '</form>'
    const perestansPvtK = document.getElementById("input-for-perestansPvt-k");
    const answer = document.getElementById("answer");
    const formForPerestansPvt = document.getElementById("form-for-perestansPvt");
    const types = document.getElementById("types");
    perestansPvtK.addEventListener("input", (event) => {
        let t = Number(perestansPvtK.value);
        types.innerHTML = "";
        for (let i =1; i<t+1; i++){
            types.innerHTML += '<label for="type">Кол-во предметов типа '+ i + '</label><input id = "type'+i+'" type="number"><p></p>'
        }
    })
    formForPerestansPvt.addEventListener("submit", (event) =>{
        event.preventDefault();
        let a = 0;
        let b = 1n;
        answer.innerText = "";
        for (let i = 1; i<Number(perestansPvtK.value)+1; i++){
            const t = document.getElementById("type"+i);
            a += Number(t.value);
            b *= factorial(t.value);
        }
        answer.innerText = "Ответ: " + factorial(a) / b;
    })
    })
UrnsrBtn.addEventListener("click", (event) => {
    placeForForm.innerHTML = '<form class="form" id="form-for-urnsr">\n' +
        '    <label for="form-for-urnsr">Урновая модель</label><p></p>\n' +
        '    <label for="input-for-urnsr-k">Извлекается</label><p></p>\n' +
        '    <input type="number" class="input" id="input-for-urnsr-k" placeholder="k"><p></p>\n' +
        '    <label for="input-for-urnsr-r">Меченных cреди извлечённых</label><p></p>\n' +
        '    <input type="number" class="input" id="input-for-urnsr-r" placeholder="r"><p></p>\n' +
        '    <label for="input-for-urnsr-n">Меченных</label><p></p>\n' +
        '    <input type="number" class="input" id="input-for-urnsr-m" placeholder="m"><p></p>\n' +
        '    <label for="input-for-urnsr-n">Всего</label><p></p>\n' +
        '    <input type="number" class="input" id="input-for-urnsr-n" placeholder="n"><p></p>\n' +
        '    <button type="submit">Вычислить</button><p></p>\n' +
        '    <div id="answer" class="answer"></div>\n' +
        '</form>'
    const urnsrN = document.getElementById("input-for-urnsr-n");
    const urnsrK = document.getElementById("input-for-urnsr-k");
    const urnsrM = document.getElementById("input-for-urnsr-m");
    const urnsrR = document.getElementById("input-for-urnsr-r");
    const answer = document.getElementById("answer");
    const formForurnsr = document.getElementById("form-for-urnsr");
    formForurnsr.addEventListener("submit", (event) => {
        event.preventDefault();
        let k = Number(urnsrK.value);
        let n = Number(urnsrN.value);
        let m = Number(urnsrM.value);
        let r = Number(urnsrR.value);
        if (m > n) {
            alert("m не может быть больше n");
            answer.innerText = "";
        } else {
            if (k > m) {
                alert("k не может быть больше m");
                answer.innerText = "";
            } else {
                if (r > k) {
                    alert("r не может быть больше k");
                    answer.innerText = "";
                } else {
                    let a = comb(m, r);
                    let b = comb(n-m, k-r);
                    let c = comb(n, k);
                    answer.innerText = "Ответ: " + a*b + ' /\n' + c;
                }
            }
        }
    })
})
