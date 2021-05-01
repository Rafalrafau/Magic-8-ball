
const arr = [
    'As I see it, yes.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don’t count on it.',
    'It is certain.',
    'It is decidedly so.',
    'Most likely.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Outlook good.',
    'Reply hazy, try again.',
    'Signs point to yes.',
    'Very doubtful.',
    'Without a doubt.',
    'Yes.',
    'Yes – definitely.',
    'You may rely on it.'
]

function testYourLuck() {

        text = document.getElementById("input")
        if(text.value === ""){

            return document.getElementById("quote").textContent = "You need to ask the question.";

        }else{

            text.value = '';
            let number = Math.floor(Math.random() * 20);
            console.log(number);
            return document.getElementById("quote").textContent = arr[number];

        }
}
