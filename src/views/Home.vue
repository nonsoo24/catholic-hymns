<template>
  <div class="home">

    <!-- navbar -->
    <Nav class="mb-6" />

    <!-- side navbar -->
    <SideNavBar @update="filterHymns" />

    <section>
      <div class="catholic-hymns">
        <!-- search input field -->
        <div>
          <div class="relative">
            <span class="" style="position: relative;">
              <input type="text"
                class="transition-colors duration-100 ease-in-out focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 pr-4 pl-10 py-2 w-11/12 py-2 px-4 text-gray-700 leading-normal ds-input" name="search" id="search"
                placeholder="Search..." v-model="searchQuery" aria-label="Search">
            </span>

            <!-- search icon -->
            <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg class="fill-current pointer-events-none text-gray-600 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                </path>
              </svg>
            </div>
          </div>
        </div>

        <!-- Hymn List div -->
        <div class="hymns w-11/12">
          <ol class="">
            <li v-for="(hymn, i) in myFilters" :key="i" @click="hymnLink(hymn._id)"
              class="cursor-pointer p-5 border-b border-black"> <span>{{hymn.number}}.</span>
              {{hymn.title}} </li>
          </ol>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue';
import SideNavBar from '@/components/SideNavBar.vue'
import {HymnList} from '@/components/Hymn.js'

export default {

  data() {
    return {
      hymns: [],
      searchQuery: null,
      categoryFilter: [],
    }
  },
  name: 'Home',
  components: {
    Nav,
    SideNavBar
  },

  computed: {
    myFilters() {
      if (this.searchQuery) {
        return this.hymns.filter((hymn) => {
          return this.searchQuery.toLowerCase().split(' ').every(v => hymn.title.toLowerCase()
            .includes(v))
        })

      } else if (this.categoryFilter.length > 0) {
        return this.categoryFilter

      } else {
        return this.hymns
      }
    }
  },

  methods: {
    //route to hymn page by hymn ID
    hymnLink(_id) {
      this.$router.push({
        name: 'Hymn',
        params: {
          _id
        }
      }).catch((err) => {
        throw new Error(`error: ${err}.`);
      });
    },

    // filter hymn by category
    filterHymns(value) {
      value == 'all' ? this.allHymns() : this.filteredHymns(value);
    },
    // return all hymns
    allHymns() {
      this.categoryFilter = this.hymns;
    },

    // return all hymn list that matches value (category)
    filteredHymns(value) {
      let results = this.hymns.filter((hymn) => {
        return hymn.category.name.toLowerCase() === value.toLowerCase()
      })
      this.categoryFilter = results
    },

    getHymn() {
      //gets all hymns from DB
      fetch("https://catholic-hymns.herokuapp.com/hymns")
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('hymns', JSON.stringify(data));
        })
        .catch(error => console.error(error))

         var newHymn = JSON.parse(localStorage.getItem('hymns'));
          newHymn.forEach(hymn => {
            this.hymns.push(hymn);
          })

          // sort hymn title alphabetically
          this.hymns.sort((a, b) => (a.number > b.number) ? 1 : -1)
      // checks if local storage is empty before pushing data coming from API to hymns array
      // if (localStorage.getItem('hymns') != null) {

      // }
    }
    },

  created() {
    this.getHymn();
  }
  // mounted() {
  //   this.getHymn();
  // },
};
</script>

<style scoped>
  @media only screen and (min-width:320px) {
    .catholic-hymns {
      margin: 110px 0 0 90px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .catholic-hymns {
      margin: 110px 0 0 90px;
    }

  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .catholic-hymns {
      margin: 110px 0 0 250px;
    }

  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {

    .catholic-hymns {
      margin: 110px 0 0 300px;
    }

  }

  @media only screen and (min-width:320px) {
    .hymns {
      padding: 30px 1px 0px 15px;
    }
  }

  @media only screen and (min-width: 992px) {
    .hymns {
      padding: 30px 15px 60px 15px;
    }

  }

  span {
    padding-right: 30px;
  }

</style>
