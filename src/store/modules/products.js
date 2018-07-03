//import products from '../../data/products';
import axios from 'axios';
const state = {
	products: []
}

const mutations = {
	'SET_PRODUCTS' (state, products){
		state.products = products;
	}
	
};

const actions = {
	initProducts: ({commit}) => {
		//commit('SET_PRODUCTS', products)
		axios.get('products.json')
		.then(data => {
			if(data) {
				const products = data.data;
				commit('SET_PRODUCTS', products);
			}
		})
	}
};

const getters = {
	products: state => {
		return state.products
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}