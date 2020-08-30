const quoteContainer = document.getElementById('quote-container');
const NewQuoteBtn = document.getElementById('new-quote');
const TwitterBtn = document.getElementById('twitter');
const authorText = document.getElementById('author');
const quoteText = document.getElementById('quote');
// Get Quote From API 
async function getQuote() {
     //  I need to use a Proxy URL to make my API call in order to avoid a CORS error
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        // Check if Author field is blank and replace it with 'Unknown'
        if (data.quoteAuthor === '') {
          authorText.innerText = 'Unknown';
        } else {
            authorText.innerText = data.quoteAuthor
        };
        // reduce font-size for long quotes
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote')
        } else {
            quoteText.classList.remove('long-quote')
        }
        quoteText.innerText = data.quoteText
        
    } catch(error) {
        getQuote()
    }

}

 // tweet quote
function TweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
    window.open(twitterUrl, '_blank');
}

//Event Listeners
TwitterBtn.addEventListener('click', TweetQuote);
NewQuoteBtn.addEventListener('click', getQuote);

//on load
getQuote()