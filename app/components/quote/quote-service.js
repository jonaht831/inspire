let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'https://favqs.com/api/qotd';
let apiUrl = url + encodeURIComponent(url2);
//Do Not Edit above we have to go through the bcw-getter to access this api


const quoteApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});


export default class QuoteService {
	getQuote(drawQuote) {
		console.log('looking for some good quotes')
		quoteApi().then(res => {
			console.log('Quote Data', res.data)
			drawQuote(res.data.quote)
		})
	}
}
