<nav>
	<a href="/">Logo</a>
</nav>

<slot />

<style lang="scss">
	@import './variables.scss';
	:global(html) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		background-color: $darkColor;
	}

	/* unvisited link */
	:global(a:link) {
		color: #172433;
	}

	/* visited link */
	:global(a:visited) {
		color: #243951;
	}

	/* mouse over link */
	:global(a:hover) {
		color: hotpink;
	}

	/* selected link */
	:global(a:active) {
		color: blue;
	}
	body {
		background-color: #b6cfea;
	}
</style>
