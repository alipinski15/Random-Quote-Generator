/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


let randomNumber;
let randomQuote;
let htmlToPage = '';

/* An array of Objects containing a Quote, Source of the quote, Citation, and year of quote*/
let quotes = [
	{
	quote: 'Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.',
	source: 'Thomas Jefferson',
	},
	{
	quote: 'I guess it comes down to a simple choice, really. Get busy living or get busy dying.',
	source: 'Andy Dufresne',
	citation: 'Movie ( Shawshank Redemption )',
	year: '1947'
	},
	{
	quote: 'Success consists of going from failure to failure without loss of enthusiasm.',
	source: 'Winston Churchhill',
	citation: 'Book',
	year: '1913'
	},
	{
	quote: 'The secret of staying young is to live honestly, eat slowly, and lie about your age.',
	source: 'Lucille Ball',	
	},
	{
	quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
	source: 'Steve Jobs',
	citation: 'Speech at Stanford Unversity',
	year: '2005'
	}
];

/* This function pulls a random quote from the Quotes array. */

function getRandomQuote(){
	randomNumber = Math.floor(Math.random() * 5);
		return quotes[randomNumber];
}

/* This function creates the HTML for the quotes to get printed to the webpage. 
   It checks to see if the Citation & Year properties are present. If they are it adds them to the HTMl to be printed. */

function printQuote(){
	randomQuote = getRandomQuote(quotes);
	htmlToPage = '<p class="quote">' + randomQuote.quote +'</p>';
		htmlToPage +='<p class="source">' + randomQuote.source;
	if(randomQuote.citation){
		htmlToPage += '<span class="citation">' + randomQuote.citation + '</span>';
	}
	if(randomQuote.year){
		htmlToPage += '<span class="year">' + randomQuote.year + '</span>';
	}
	htmlToPage += '</p>'
	document.getElementById('quote-box').innerHTML = htmlToPage; 
}

//Changes the Quote at random when "Show another Quote" button is pressed.
document.getElementById('load-quote').addEventListener("click", printQuote, false); 