<template>
	<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link class="navbar-brand" to="/">Shopping Cart</router-link>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
      	
        <router-link to="/cart" activeClass="active" tag="li"><a>Cart</a></router-link>
      </ul>
      <strong class="navbar-text navbar-right">Cart Total: {{ total }}</strong>
      
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>
<script type="text/javascript">

  export default {
    computed: {
      total() {
        return this.$store.getters.cartTotal;
      }
    }
  }
</script>