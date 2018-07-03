import Cart from './components/cart/cart.vue';
import productDetail from './components/product/productDetail.vue';
import Home from './components/Home.vue';

export const routes = [
	{path:'/', component: Home},
	{path:'/cart', component: Cart},
	{path:'/productdetail/:id', component: productDetail, name:'productdetail'}
]


