<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import giveme from '$lib/images/giveme.png';
</script>

<svelte:head>
	<title>Book - Josh Rehab</title>
    <meta property="og:title" content="Book" />
	<meta name="description" content="Welcome to Josh Rehab – the place where we take a lighthearted approach to tackling a serious issue. Here at Josh Rehab, we've combined a unique blend of humor, camaraderie, and genuine support to create a one-of-a-kind parody drug addiction rehab experience." />
	<meta property="og:description" content="Welcome to Josh Rehab – the place where we take a lighthearted approach to tackling a serious issue. Here at Josh Rehab, we've combined a unique blend of humor, camaraderie, and genuine support to create a one-of-a-kind parody drug addiction rehab experience." />
</svelte:head>

<img src="{giveme}" alt="Drug exchange">

<h3 class="center">{data.chooseInsult}</h3>
<p class="center" style="margin-top: 2.5rem;margin-bottom: 2.5rem">Addiction is actually bad, <a href="https://www.google.com/search?q=Rehab%20near%20me">find a rehab</a> near you</p>

