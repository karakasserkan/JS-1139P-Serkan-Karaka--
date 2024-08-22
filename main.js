
// Parametre kullanarak işleme
function increaseScore(teamName){
    const scoreId=`score${teamName}`;
    const scoreElement= document.getElementById(scoreId);
    let score = Number(scoreElement.textContent);
    scoreElement.textContent= ++score;
}
function decreaseScore(teamName){
    const scoreId=`score${teamName}`;
    const scoreElement=document.getElementById(scoreId);
    let score = Number(scoreElement.textContent);
    if(score > 0){
        scoreElement.textContent = --score;
    }else{
        alert("Skor daha fazla azaltılamaz!");
    }
}
// Ayrı Ayrı işleme
document
.getElementById("resetButtonA")
.addEventListener("click",function(){
    document.getElementById("scoreA").innerText="0";
});
document
.getElementById("resetButtonB")
.addEventListener("click",function(){
    document.getElementById("scoreB").innerText="0";
});

function nameChange(teamName){
    const name = prompt("Takımın Yeni İsmini Giriniz:")
    // div classını seçip alt elemanı olan h2'nun innerına ulaşacaz.
    document
    .getElementById(`team${teamName}`)
    .getElementsByTagName("h2")[0].textContent=name;//tagnameden h2 yi seçip 0. elemanına ulaştık.
}

function scoreChange(teamName){
    const score= prompt ("Yeni Gol Sayısını Giriniz:");
    if(!isNaN(score) && score !== null){
        const scoreNum=Number(score);
        if(Number.isInteger(scoreNum) && scoreNum >=0){
            document.getElementById(`score${teamName}`).textContent=scoreNum;
        }else{
            alert("Lütfen Geçerli Bir Sayı Giriniz!")
        }
    }else{
        alert("Giriş İptal Edildi ve ya Geçersiz Bir Sayı Girildi!");
    }
}