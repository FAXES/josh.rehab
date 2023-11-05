<script>
	import Header from './partials/Header.svelte';
	import Footer from './partials/Footer.svelte';
</script>

<div>
	<Header />
	<div class="content">
		<slot />
	</div>
	<div>
		<Footer />
	</div>
</div>