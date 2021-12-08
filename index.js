function writeCards(names, eventName) {
    const cards = [];
    for (let i = 0; i < names.length; i++){
        cards[i] = `I love you ${names}, thanks for the wonderful ${eventName}!`;
    }
    return cards;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}
return countDown(10);