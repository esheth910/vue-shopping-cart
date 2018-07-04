<template>
	<div>
		<h1>Cart</h1>
		<!-- <div v-for="product in products">{{ product.name }} | {{ product.id }}</div> -->
		<!-- <app-cart-product  v-for="product in products" :product="product"></app-cart-product> -->
		<table v-if="checkProductLen()">
			<thead>
				<tr>
					<th>ID</th>
					<th>Product</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="product in products">
					<td style="width: 30%">{{ product.id }}</td>
					<td style="width: 50%">{{ product.name }}</td>
					<td style="width: 20%">{{ product.price }}</td>
				</tr>
				<tr style="border-top: 1px solid;">
					<td colspan="2" style="width: 80%; text-align: right"><b>Total: </b></td>
					<td>{{ carttotal }}</td>
				</tr>
			</tbody>
		</table>
		<table v-else>
			<tr><td>No Products added to cart</td></tr>
		</table>
	</div>
</template>
<script type="text/javascript">
import {mapGetters} from 'vuex';
import cartProduct from './cartProduct.vue';
	export default {
		computed: {
			...mapGetters({
				products: 'cartProducts',
				carttotal: 'cartTotal'
			})
		},
		components: {
			appCartProduct: cartProduct
		},
		methods: {
			checkProductLen(){
				if(this.products.length > 0){
					console.log("length greater than 0");
					return true;
				} else {
					console.log("length 0");
					return false;
				}
			}
		}
	}
</script>