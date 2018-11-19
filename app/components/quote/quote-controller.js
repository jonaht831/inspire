import QuoteService from "./quote-service.js";

let qs = new QuoteService


//function getQuote() {
//qs.getQuote(drawQuote)

//}

function drawQuote(quote) {
	var template = `
		<h1>${quote.body}</h1>
		<h2>${quote.author}</h2>`
	document.getElementById('quote').innerHTML = template
}


export default class QuoteController {
	constructor() {
		this.getQuote(drawQuote)
	}

	getQuote(drawQuote) {
		qs.getQuote(drawQuote)
	}

}
