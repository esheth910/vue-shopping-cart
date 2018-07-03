const state = {
	total: 0,
	products: []
}

const mutations = {
	'ADD_TO_CART'(state, {productId, price}){
		const record = state.products.find(element => element.id == productId)
		if(!record){
			state.products.push({
				id: productId,

			})
		}
		state.total += price
	}
}

const actions = {
	addToCart({commit}, order){
		commit('ADD_TO_CART', order)
	}
}

const getters = {
	cartProducts(state, getters){
		return state.products.map(product => {
			const record = getters.products.find(element => element.id == product.id);
			return {
				id: product.id,
				name: record.name,
				price: record.price
			}
		});
	},
	cartTotal(state){
		return state.total;
	}
};	

export default {
	state,
	mutations,
	actions,
	getters
}