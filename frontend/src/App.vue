<template>
  <div class="app-main-heading-container">
    <router-link :to="{ name: 'home' }" class="logo-container">
      <img src="@/assets/logo.png" alt="sharenet log" class="logo">
    </router-link>
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link>
    </nav>
  </div>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  padding: 15px;
}

#app .logo {
  width: 150px;
}

.app-main-heading-container {
    text-align: left;
    display: flex;
    align-items: center;
}

#app .logo-container {
  display: inline-block;
  margin-right: 20px;
}
#app nav {
  /* padding: 30px; */
  display: inline-block;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
