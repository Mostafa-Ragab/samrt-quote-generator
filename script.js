// Get Quote From API 
async function GetQuote() {
    const ApiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    const ProxyApi = 'https://cors-anywhere.herokuapp.com/'

    try {
        const response = await fetch(ProxyApi + ApiUrl);
        const data = await response.json();
        console.log(data)
    } catch(error) {
        console.log('wooops, no quote', error)
        GetQuote()
    }

}

GetQuote()