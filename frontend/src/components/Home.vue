<template>
  <div class="home-main-container">
    <div class="component-heading-container">
      <div class="greeting-container">
        <h1 class="main-page-heading">{{ pageHeading }}</h1>
        <p class="username">{{ userDetails.username }}</p>
      </div>
      <div class="view-header-details">
        <p class="user-email"><b>Email:</b> {{ userDetails.email }}</p>
        <p class="user-role"><b>Role:</b> {{ userDetails.role }}</p>
      </div>
    </div>
    <div class="home-main-content" v-if="spotPrices.length > 0">
      <table class="spots-table">
        <thead>
          <tr class="main-table-heading-parent">
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
            <td :class="spot.move < 0 ? 'red' : 'green'">{{ spot.move }}</td>
            <td :class="spot.pmove.toFixed(2) < 0 ? 'red' : 'green'">{{ spot.pmove.toFixed(2) }} %</td>
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

<style scoped>
  .red {
    color: rgb(248, 5, 5);
  }

  .green {
    color: rgb(5, 230, 5);
  }

  .home-main-content {
    margin-top: 20px;
  }

  .component-heading-container {
    margin-bottom: 2.6rem;
    display: flex;
    justify-content: space-between;
  }

  .greeting-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .view-header-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.2rem;
  }

  .table-filter-container {
    text-align: left;
  }

  .main-table-heading-parent {
    background-color: #152D4D;
    color: #fff;
  }

  .main-table-heading {
    font-size: 1.6rem;
    padding: 10px;
  }

  .home-main-container .spots-table {
      width: 100%;
      border: 1px solid #000;
  }

  .table-filter-container td {
    padding: 1rem 0;
  }

  .spot-value-row:nth-child(even) {
    background-color: #eaeef2;
  }

  .spot-value-row td {
    padding: 0.3rem;
  }

  .home-main-container .spots-table tbody {
    text-align: left;
  }
</style>