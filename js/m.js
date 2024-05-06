
/*localStorage.setItem('ism','islom')
localStorage.setItem('familiya','Toshkanov')
localStorage.setItem('yoshi','20 yoshda')*/

/*
localStorage['ism'] = "shaxzoda"
localStorage['familiya'] = "Toshkanova"
localStorage['yoshi'] = "22 yoshda"
*/

/*
localStorage.removeItem('ism')
localStorage.removeItem('familiya')
localStorage.removeItem('yoshi')
*/
/*localStorage.clear()*/
/*

let uningismi = localStorage.getItem('ism')
let uningfamilyasi = localStorage.getItem('familiya')
let uningyoshi = localStorage.getItem('yoshi')
*/

/*
console.log(uningismi,uningfamilyasi,uningyoshi)

let sorov = new XMLHttpRequest()
sorov.open("get", "https://getty.uz/serverdan/malumot/olish")
sorovle .send()

sorov.onload = function () {
    console.log(sorov.responseText)
}
*/

/*
let  jsFile = {ism: "Shaxzoda",yoshi: 99}
let jsonFile = '{"ism": "Islom","yoshi": 20}'


/!*console.log(JSON.parse(jsFile))
console.log(JSON.parse(jsonFile))*!/

let sorov = new XMLHttpRequest()
sorov.open("get","jsonFile.json")
sorov.send()

sorov.onload = function () {
    console.log(JSON.parse(sorov.responseText))
}
 */

/*
let matn = "sen gapir sen men esa sen bilan yozib boramiz"

let birinchiSenIndex = matn.indexOf('sen')

console.log(matn.indexOf('sen',birinchiSenIndex +1))
*/

let matn = "Salom Salom hammaga! salom berdim hammaga. salom , salom"

/*console.log(matn.replace(/salom|hammaga|berdim/gi, 'alik'))*/

let yangiMatn = matn.replace(/salom|hammaga/gi,function (soz) {
    if (soz == "Salom" || soz == "salom")
        return "alik"
    else if (soz == "hammaga"){
        return "barchaga"
    }
})

console.log(yangiMatn)