function checkTest(){

    let score = 0;

    for(let i = 1; i <= 10; i++){
        let answer =
        document.querySelector(`input[name="q${i}"]:checked`);

        if(answer){
            score += Number(answer.value);
        }
    }

    let rank;

    if(score <= 4){
        rank = "🟢 Новичок";
    }
    else if(score <= 7){
        rank = "🔵 Сборщик ПК";
    }
    else{
        rank = "🏆 Эксперт по железу";
    }

    document.getElementById("result").innerHTML =
    `Результат: ${score}/10<br>${rank}`;
}
