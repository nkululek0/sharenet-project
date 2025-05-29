<template>
  <div class="app-main-heading-container">
    <router-link :to="{ name: 'home' }" class="logo-container">
      <img src="@/assets/logo.png" alt="sharenet log" class="logo">
    </router-link>
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'events' }">Events</router-link>
      <router-link :to="{ name: 'contactUs' }">Contact Us</router-link>
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
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100vh;
}

#app .logo {
  width: 150px;
}

#app .app-main-heading-container {
    padding-top: 1rem;
    background-color: #eaeef2;
}

#app .main-content-container {
    padding: 1rem;
}

#app .logo-container {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 1rem;
}

#app nav {
  display: block;
}

#app nav a {
  height: 2.5rem;
  display: block;
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app nav a.router-link-exact-active {
  color: #000;
  background-color: #fff;
  text-decoration: none;
}
</style>
