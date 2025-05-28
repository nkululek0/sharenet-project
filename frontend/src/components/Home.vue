<template>
  <div class="home-main-container">
    <h1 class="main-page-heading">{{ pageHeading }}</h1>
    <div class="view-header-details">
      <div class="user-details">
        <p class="username">{{ userDetails.username }}</p>
        <p class="user-email">{{ userDetails.email }}</p>
        <p class="user-role">{{ userDetails.role }}</p>
      </div>
    </div>
    <div class="home-main-content" v-if="spotPrices.length > 0">
      <table class="spots-table">
        <thead>
          <tr>
            <th class="main-table-heading" colspan="5">Top 5 Latest Spots</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>FullName</th>
            <th>Price</th>
            <th>Move</th>
            <th>Percentage Move</th>
            <th>Time</th>
          </tr>
          <tr v-for="spot in spotPrices" :key="spot.tickerId" class="spot-value-row">
            <td>{{ spot.fullName }}</td>
            <td>{{ spot.price }} {{ spot.code }}</td>
            <td :class="spot.move < 0 ? 'spot-move-red' : 'spot-move-green'">{{ spot.move }}</td>
            <td>{{ spot.pmove.toPrecision(3) }} %</td>
            <td>{{ new Date(spot.datetime).toGMTString().split(" GMT")[0] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    pageHeading: String,
    userDetails: Object,
    spotPrices: Array
  }
}
</script>

<style>
  .home-main-content {
    margin-top: 20px;
  }

  .home-main-container .spots-table tbody {
    text-align: left;
  }

  .home-main-container .spots-table {
      width: 100%;
  }

  .home-main-container .main-table-heading {
    font-size: 1.6rem;
    text-decoration: underline;
    padding: 10px;
  }
</style>