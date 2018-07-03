import axios from 'axios';

export const loadData = ({commit}) => {
	axios.get('products.json')
	.then(response => response.json())
	.then(data => {
		if(data) {
			//alert();
			const products = data.products;
/*			const funds = data.funds;
			const stockPortfolio = data.stockPortfolio;
			const portfolio = {
				stockPortfolio,
				funds
			};
*/			commit('SET_PRODUCTS', products);
			//commit('SET_PORTFOLIO', portfolio);*/
		}
	})
}