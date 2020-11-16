//proto, ajax, callback

eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord)
    //change
    document.getElementById("language").onchange = function(){
        //arayüz işlemleri
        ui.chahgeUI();
    }
}

const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value);
const ui = new UI();


function translateWord(e){
    
    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value)
    
    translate.translateWord(function(err,response){
        if(err){
            //hata
            console.log(err);
        }
        else{
            ui.displayTranslate(response);
            console.log(response);
        }
        
    })




    e.preventDefault();
}