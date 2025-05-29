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
          <tr class="table-filter-container">
            <td>
              <label>Sort by: </label>
              <select id="table-filter" v-model="sortValue">
                <option value="fullName">Fullname</option>
                <option value="price">Price</option>
                <option value="move">Move</option>
                <option value="pmove">Percentage Move</option>
                <option value="datetime">Time</option>
              </select>
            </td>
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
          <tr v-for="spot in sortSpotsTable(sortValue)" :key="spot.tickerId" class="spot-value-row">
            <td>{{ spot.fullName }}</td>
            <td>{{ spot.price }}</td>
            <td :class="spot.move < 0 ? 'spot-move-red' : 'spot-move-green'">{{ spot.move }}</td>
            <td>{{ spot.pmove.toFixed(2) }} %</td>
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
  },
  data() {
    return {
      sortValue: "fullName"
    }
  },
  methods: {
     sortSpotsTable (sortValue) {
      const self = this;

      if (sortValue) {
        self.spotPrices.sort((firstItem, secondItem) => {
          let firstItemSortValue = firstItem[sortValue];
          let secondItemSortValue = secondItem[sortValue];

          return firstItemSortValue < secondItemSortValue ? -1 : 1;
        });
      }
      return self.spotPrices;
    }
  }
}
</script>

<style>
  .home-main-content {
    margin-top: 20px;
  }

  .home-main-content .table-filter-container {
    text-align: left;
  }

  .home-main-container .main-table-heading {
    font-size: 1.6rem;
    text-decoration: underline;
    padding: 10px;
  }

  .home-main-container .spots-table {
      width: 100%;
  }

  .home-main-container .spots-table tbody {
    text-align: left;
  }
</style>