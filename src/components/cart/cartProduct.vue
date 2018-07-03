<template>
	<div>
		<table>
			<!-- <thead>
				<tr>
					<th>Product Id</th>
					<th>Product</th>
					<th>Price</th>
				</tr>
			</thead> -->
			<tbody>
				<tr>
					<td style="width: 30%">{{ product.id }}</td>
					<td style="width: 50%">{{ product.name }}</td>
					<td style="width: 20%">{{ product.price }}</td>
				</tr>
				<tr style="border-bottom: 1px solid;">
					<td colspan="2">Total</td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script type="text/javascript">

	export default {
		props: ['product']
	}
</script>