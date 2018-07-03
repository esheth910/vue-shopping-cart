<template>
	<!-- <div id="products" class="row list-group" > -->
    	<!-- <span v-for="product in products"> -->
        <div class="item  col-xs-4 col-lg-4">
            <div class="thumbnail">
                <!-- <img class="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" :src="product.image" /> -->
                <img class="group list-group-image"  alt="" v-bind:src="product.img"/>
                <div class="caption">
                    <h4 class="group inner list-group-item-heading">
                        <router-link :to="{ name: 'productdetail', params: { id: product.id }}"><a>{{ product.name }}</a></router-link>
                        </h4>

                    <p class="group inner list-group-item-text">
                        Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <p class="lead">
                                ${{ product.price }}</p>
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <button class="btn btn-success" @click="addtocart(product)" :disabled="addedToCart">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   <!--  </span> -->
         <!--  -->
   <!--  </div> -->
</template>
<script>
	export default {
		props: ['product'],
		methods: {
			addtocart(){
                const order = {
					productId: this.product.id,
					name: this.product.name,
					price: this.product.price
					
				};
				console.log(order);
				this.$store.dispatch('addToCart', order);
            }
		},
		computed: {
			 addedToCart(){
            	const isAdded = this.$store.getters.cartProducts.find(element => element.id == this.product.id);
            	if(isAdded){
            		return true
            	} else {
            		return false;
            	}
            }

		}
	}
</script>
<style type="text/css" >
	
</style>
