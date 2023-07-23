function Sual(sualMetni,cevabSecenekleri,dogruCevab){
    this.sualMetni = sualMetni;
    this.cevabSecenekleri = cevabSecenekleri;
    this.dogruCevab = dogruCevab;
    
 
}

Sual.prototype.cevabiYoxla = function(cevab){
    return cevab === this.dogruCevab 
}

let sorular = [
    new Sual("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Sual("2-Hangisi frontend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "javascipt", d: "sql" }, "d"),
    new Sual("3-Hangisi backend kapsamında değerlendirilir?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Sual("4-Hangisi javascript programlama dilini kullanmaz?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d")
];