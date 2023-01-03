var translate_button = document.querySelector("#btn-translate");
var text_area = document.querySelector("#text-area");
var output_div = document.querySelector('#output');
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function errorHandler(error){
    console.log("error handler ",error);
    alert("something wrong with server, try after some timef")
}
translate_button.addEventListener("click",function translateToBanana(){
    textUrl =  serverUrl + "?text=" + text_area.value;
    //console.log(textUrl) 
    fetch(textUrl)
        .then(response => response.json())
        .then(json => {
            console.log(json.contents.translated)
            output_div.innerHTML = json.contents.translated
        })
        .catch(errorHandler)
    
})

