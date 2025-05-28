<template>
  <div class="home-component-parent-container main-content-container">
    <Home
      :pageHeading="pageHeading"
      :userDetails="userDetails"
      :spotPrices="spotPrices"
    />
  </div>
</template>

<script>
import Home from '@/components/Home.vue'

export default {
  name: 'HomeView',
  components: {
    Home
  },
  data() {
    return {
      pageHeading: "Welcome!",
      userDetails: {},
      spotPrices: []
    }
  },
  mounted() {
    const self = this;
    fetch("https://api.sharenet.co.za/api/v1/px2/spots")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        self.userDetails = data.user;
        self.spotPrices = data.spots.sort((firstItem, secondItem) => {
          return secondItem.tickerId - firstItem.tickerId;
        })
        .slice(0, 5);
      })
      .catch((error) => {
        console.log("There was an error while retrieving spots");
        console.error(error);
      });
  }
}
</script>

<style>
  .view-header-details img {
    width: 150px;
  }
</style>