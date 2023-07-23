function UI(){
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.quiz_box =  document.querySelector(".quiz_box"),
    this.score_box =  document.querySelector(".score_box"),
    this.option_list = document.querySelector(".option_list"),
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second"),
    this.correctIcon = ` <div class="icon"> <i class="fas fa-check"></i> </div>  `,
    this.incorrectIcon = ` <div class="icon"> <i class="fas fa-times"></i> </div>`,
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second"),
    this.time_line = document.querySelector(".time_line")
    

}

UI.prototype.soruGoster = function(soru){
    let question =`<span>${soru.sualMetni}</span>`;
    let options = '';
    for(let cevab in soru.cevabSecenekleri){
        options +=
        `
        <div class = "option">
        <span> <b>${cevab}</b>: ${soru.cevabSecenekleri[cevab]} </span>
        </div>
      
        `;
    }


    document.querySelector(".question_text").innerHTML = question;
   this.option_list.innerHTML = options;

   const option = this.option_list.querySelectorAll(".option");
for (let opt of option){
    opt.setAttribute("onclick","optionSelected(this)")
}
    
}

UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru){
    let tag = ` <span class="badge bg-warning">${soruSirasi}/${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}


UI.prototype.skoruGoster = function(toplamSoru,dogruCevab){
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevab} dogru cevab verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}

