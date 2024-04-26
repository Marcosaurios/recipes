<!-- Shared components across the website -->
<main>
  <nav>
    <a href="/">Logo</a>
  </nav>

  <slot />
</main>

<style lang="scss" global>
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #172433;
}

/* unvisited link */
a:link {
  color: #172433;
}

/* visited link */
a:visited {
  color: #243951;
}

/* mouse over link */
a:hover {
  color: hotpink;
}

/* selected link */
a:active {
  color: blue;
}
body {
  background-color: #b6cfea;
}

main {
  max-width: 730px;
  margin: 0 auto;
}
</style>
