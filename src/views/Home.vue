<template>
  <div class="home">
    <Nav class="mb-6" />
    <SideNavBar @update="filterHymns" />

    <section>
      <div class="catholic-hymns">
        <!-- <span class="ti-search"></span>  -->
        <!-- <input type="text"
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500"
          placeholder="Search..." v-model="searchQuery"> -->

          <div>
              <div class="relative">
                <span class="" style="position: relative;">
                  <input type="text"
                  class="transition-colors duration-100 ease-in-out focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 pr-4 pl-10 py-2 w-9/12 py-2 px-4 text-gray-700 leading-normal ds-input"
                  placeholder="Search..." v-model="searchQuery">
                </span>
               
                <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                  <svg class="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
                </div>
              </div>
          </div>
       
        <!-- <div class="hymns  w-9/12" id="panzoom-element"> -->
        <div class="hymns  w-9/12">
          <ol>
            <li v-for="(hymn, i) in myFilters" :key="i" @click="hymnLink(hymn._id)">
              {{hymn.title}} </li>
          </ol>
        </div>
         <!-- <div class="command">
            <button @click="zoom(1)"><span class="ti-zoom-in ti-3x"></span> </button>
            <button @click="zoom(-1)"><span class="ti-zoom-out ti-3x"></span></button>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue';
import SideNavBar from '@/components/SideNavBar.vue'
import {HymnList} from '@/components/Hymn.js'
//import Panzoom from '@panzoom/panzoom'

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

  props: {
    options: {
      type: Object,
      default: () => {}
    },
  },

  computed: {
    myFilters() {
      debugger
        if (this.searchQuery) {
        return this.hymns.filter((hymn) => {
          return this.searchQuery.toLowerCase().split(' ').every(v => hymn.title.toLowerCase().includes(v))
        })

        } else if(this.categoryFilter.length > 0) {
          return this.categoryFilter

        } else {
          return this.hymns
        }
    }
  },

  methods: {
    hymnLink(_id) {
      this.$router.push({
        name: 'Hymn',
        params: {_id}
      }).catch((err) => {
        throw new Error(`error: ${err}.`);
    });
    },


    filterHymns(value) {
      debugger
       value == 'all' ? this.allHymns() : this.filteredHymns(value);
    },
    allHymns(){
      this.categoryFilter = this.hymns;
    },
    filteredHymns(value) {
      debugger
      let results = this.hymns.filter((hymn) => {
         return hymn.category.name.toLowerCase() === value.toLowerCase()
       })
       this.categoryFilter = results
      // console.log(results)
    },

    // zoom(level) {
    //   level === -1 ? this.panzoom.zoomOut() : this.panzoom.zoomIn()
    // },

    getHymn() {

      //gets all hymns from DB
      fetch("https://catholic-hymns.herokuapp.com/hymns")
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('hymns', JSON.stringify(data));
        })
        .catch(error => console.error(error))

      // checks if local storage is empty before pushing data coming from API to hymns array
      if (localStorage.getItem('hymns') != null) {
        var data = JSON.parse(localStorage.getItem('hymns'));
        data.forEach(hymn => {
          this.hymns.push(hymn);
        })

        // sort hymn title alphabetically
        this.hymns.sort((a, b) => (a.title > b.title) ? 1 : -1)
      }
    }
  },

  mounted() {
     this.getHymn();
  },

  // mounted() {
  //   this.panzoom = Panzoom(document.getElementById('panzoom-element'), {
  //     maxScale: 2
  //   })
  // },
};
</script>

<style scoped>
  .catholic-hymns {
    margin: 130px 0 0 300px;

  }

  .hymns {
    padding: 30px 15px 60px 15px;
  }

  .hymns li {
    border-bottom: 1px solid #000;
    padding: 20px 20px;
    cursor: pointer;
  }
  span {
    padding-right: 30px;
  }

   ol {
     list-style-type: decimal;
  }

  .command {
    position: fixed;
    left: 1150px;
    top: 520px;
  }

  .command span {
    padding-right: 15px;
  }

  [class^="ti-"], [class*=" ti-"] {
    font-size: 30px;
}

.hymn-categories {
  position: fixed;
  left: 1100px;
  top: 120px;
}

</style>
