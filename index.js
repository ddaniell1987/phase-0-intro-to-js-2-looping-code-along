function writeCards(names, eventName) {
    const messagesArray = [];
    for (let i = 0; i < names.length; i++) {
        messagesArray[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    }
    return messagesArray;
}

function countDown(number) {
    while (number>=0) {
        console.log(number);
        number--;
    }
}
