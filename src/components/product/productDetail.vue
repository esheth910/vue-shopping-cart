<template>
	<div>
		<h1>Product detail</h1>
		
		<div class="detail">
			<img :src="'../.'+$store.getters.products[$route.params.id - 1].img">
		</div>
		<p><b>{{ $store.getters.products[$route.params.id - 1].name }} </b></p>
		<p>{{ $store.getters.products[$route.params.id - 1].price }} </p>

	</div>
</template>
<script type="text/javascript">
	export default {

	}
</script>
<style type="text/css">
	.detail{
		margin: 20px;
	}

</style>