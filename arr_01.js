/*********   CODE CHALLENGE HTML **********/

/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><h1></h1><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const controls = ["<", "</", ">"];
const tags = ["html","head","head","body","h1","h1","p","p","body","html"];
let stack = [];

output(getHTML());
function getHTML() {

    const gap = " ";
    let htmlStr = "";

    for (let i = 0; i < tags.length; i++) {
        htmlStr += tags[i] + gap; 
    }

    return htmlStr;
}


// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}
