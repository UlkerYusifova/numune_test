 const quiz = new Quiz(sorular);
 const ui = new UI();

 ui.btn_start.addEventListener("click",function(){
           ui.quiz_box.classList.add("active");
           startTime(10);
           startTimerLine();
           ui.soruGoster(quiz.soruGetir());
          ui.soruSayisiniGoster(quiz.soruIndex + 1,quiz.sorular.length);
           ui.btn_next.classList.remove("show")
   
})

 ui.btn_next.addEventListener("click", function(){
    if(quiz.sorular.length != quiz.soruIndex + 1){
        quiz.soruIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);

        startTime(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1,quiz.sorular.length);

        ui.btn_next.classList.remove("show")
        }else{
         
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active"); 
        ui.score_box.classList.add("active"); 
        ui.skoruGoster(quiz.sorular.length,quiz.dogruCevabSayisi);
    }   
});

ui.btn_quit.addEventListener("click",function(){
    window.location.reload();
});

ui.btn_replay.addEventListener("click",function(){
    quiz.soruIndex = 0;
    quiz.dogruCevabSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});
// const option_list = document.querySelector(".option_list");
// const correctIcon = ` <div class="icon"> <i class="fas fa-check"></i> </div>  `;
// const incorrectIcon = ` <div class="icon"> <i class="fas fa-times"></i> </div>`;


function optionSelected(option){
    clearInterval(counter);
    clearInterval(counterLine);
let cevab = option.querySelector("span b").textContent;
let soru = quiz.soruGetir();

if(soru.cevabiYoxla(cevab)){
    quiz.dogruCevabSayisi += 1; 
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon)
}else{
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon)

}
for( let i = 0; i< ui.option_list.children.length; i++ ){
    ui.option_list.children[i].classList.add("disabled");
}
ui.btn_next.classList.add("show")

}

let counter;
function startTime (time){
   counter =  setInterval(timer, 1000);
    function timer(){
        ui.time_second.textContent = time;
        time--;
        if(time<0) {
            clearInterval(counter);
            ui.time_text.textContent = "Muddet bitdi.";

            let cevab = quiz.soruGetir().dogruCevab;
            for(let option of ui.option_list.children){
                if(option.querySelector("span b").textContent == cevab){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
               option.classList.add("disabled");
            }

            ui.btn_next.classList.add("show");
        }
    }
}
let counterLine;
function startTimerLine(){
let line_width = 0;

counterLine = setInterval(timer,100);

function timer(){
    line_width += 5;
    ui.time_line.style.width= line_width + "px";
    if(line_width > 549) {
        clearInterval(counterLine);
    }
}
}