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
	},
	'REMOVE_FROM_CART'(state, {productid, productprice}){
		const record = state.products.find(element => element.id == productid);
		//console.log("pri:"+productid);
		state.total = Number(state.total - productprice);
		state.products.splice(state.products.indexOf(record));
	}
}

const actions = {
	addToCart({commit}, order){
		commit('ADD_TO_CART', order)
	},
	removeProduct({commit}, order){
		commit('REMOVE_FROM_CART', order)
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