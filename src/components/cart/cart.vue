<template>
	<div>
		<h1>Cart</h1>
		<!-- <div v-for="product in products">{{ product.name }} | {{ product.id }}</div> -->
		<!-- <app-cart-product  v-for="product in products" :product="product"></app-cart-product> -->
		<table class="tbcls" v-if="checkProductLen()">
			<thead class="theadcls">
				<tr>
					<th>ID</th>
					<th>Product</th>
					<th>Price</th>
					<th>Remove</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="product in products">
					<td style="width: 30%" class="tdcls">{{ product.id }}</td>
					<td style="width: 30%">{{ product.name }}</td>
					<td style="width: 20%">{{ product.price }}</td>
					<td style="width: 20%"><button class="btn btn-success" @click="removeProduct(product.id,product.price)">Remove from cart</button></td>
				</tr>
				<tr class="trclstotal">
					<td colspan="2" class="tdclstotal"><b>Total: </b></td>
					<td class="tdcls"> {{ carttotal }}</td>
				</tr>
			</tbody>
		</table>
		<table v-else>
			<tr><td>No Products added to cart</td></tr>
		</table>
	</div>
</template>
<style type="text/css" scoped>
	.tbcls {
		width: 1000px;
		
	}
	.theadcls {
		background-color: grey;
		height: 6px;
	}
	.trclstotal {
		border-top: 1px solid;
		
	}
	.tdclstotal {
		width: 80%; 
		text-align: right;
		padding-top: 20px;
	}
	.tdcls {
		padding-top: 20px;
	}
</style>
<script type="text/javascript">
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
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
			},
			...mapActions({removeProductFromCart: 'removeProduct'}),
			removeProduct(id,price){
				console.log("price: "+price);
				const order = {
					productid: id,
					productprice: price
				};
				this.removeProductFromCart(order);
			}
		}
	}
</script>