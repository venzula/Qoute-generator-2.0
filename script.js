
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");





let apiQuotes =[];

//show new quote
function newQuote() {
    //pick a random quote from apiquotes array
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    authorText.textContent = quote.author;
    if(quote.text.length > 50){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

//tweet quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?=${quoteText.textContent} - ${authorText.textContent} `;
    window.open(twitterUrl, '_blank');
}




//Get quote from API
async function getQuotes(){
    const apiURl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiURl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //catch error here
    }
}

//Event Listners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);



//On Load
getQuotes();