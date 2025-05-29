<template>
  <div class="main-content-container events">
    <div class="component-heading-container">
      <h1 class="main-header-heading">Events</h1>
    </div>
    <div class="main-events-content">
      <div class="workshop-main-container">
        <h2 class="heading">Workshops</h2>
        <div class="workshop-filter-container">
          <label>Filter by:</label>
          <select id="workshop-filter" v-model="filterValue">
            <option value="">None</option>
            <option value="available">Available Seats</option>
            <option value="soldOut">Sold Out</option>
          </select>
        </div>
        <div class="workshop-container" v-if="workshops.length > 0">
          <div
            class="workshop"
            v-for="workshop in filter(filterValue)"
            :key="workshop.id"
          >
            <h3 class="title">{{ workshop.title }}</h3>
            <p class="description">{{ workshop.description }}</p>
            <div class="booking-info">
              <p class="date">
                Date:{{ new Date(workshop.start_date).toDateString() }}
              </p>
              <p class="time">
                Time:
                <!-- start time date.toLocaleString().split(", ")[0] [1] -->
                <span class="start">{{
                  new Date(workshop.start_date).toLocaleTimeString()
                }}</span>
                <span class="separator"> - </span>
                <!-- end time date.toLocaleTimeString() -->
                <span class="end">{{
                  new Date(workshop.end_date).toLocaleTimeString()
                }}</span>
              </p>
              <div
                class="availability"
                v-if="workshop.booked_seats < workshop.total_seats"
              >
                <p class="seats green">
                  {{
                    `Available: ${
                      workshop.total_seats - workshop.booked_seats
                    }/${workshop.total_seats}`
                  }}
                </p>
              </div>
              <div class="availability" v-else>
                <p class="seats red">Sold Out!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterValue: "",
      workshops: [],
    };
  },
  methods: {
    filter(input) {
      const self = this;

      if (input) {
        return self.workshops.filter((workshop) => {
          if (input == "soldOut") {
            return workshop.booked_seats == workshop.total_seats;
          } else {
            return workshop.booked_seats < workshop.total_seats;
          }
        });
      } else {
        return self.workshops;
      }
    },
  },
  mounted() {
    const self = this;

    fetch("http://localhost:3000/workshops")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        self.workshops = data;
      })
      .catch((error) => {
        console.log("There was an issue while fetching the workshops");
        console.error(error);
      });
  },
};
</script>

<style>
.red {
  color: rgb(248, 5, 5);
}

.green {
  color: rgb(5, 230, 5);
}
.component-heading-container {
  margin-bottom: 2.6rem;
  display: flex;
  justify-content: space-between;
}

.workshop-main-container {
  text-align: left;
}

.workshop-main-container .heading {
  margin-bottom: 1.5rem;
}

.workshop-filter-container {
  margin-bottom: 1rem;
}

.workshop-container .workshop {
  color: #000;
  border: 1px solid #2c3e50;
  padding: 1rem;
  box-shadow: 1px 2px 5px #000;
  margin-bottom: 2rem;
}

.workshop-container .title {
  margin-bottom: 5px;
}

.workshop-container .title::after {
  content: "";
  width: 7.5rem;
  display: block;
  border: 1px solid #000;
  bottom: 2px;
  position: relative;
}

.booking-info {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
</style>