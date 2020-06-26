<template>
  <div class="home">
    <Nav class="mb-6" />
    <SideNavBar @update="filterHymns" />

    <section>
      <div class="catholic-hymns">
        <!-- <span class="ti-search"></span>  -->
        <input type="text"
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500"
          placeholder="Search Hymns" v-model="searchQuery">

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
      testFilters: [],
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
          return this.searchQuery.toLowerCase().split(' ').every(v => hymn.title
            .toLowerCase().includes(v))
        })
        } else if(this.testFilters.length > 0) {
          return this.testFilters
          //console.log(this.testFilters)
        } else {
          console.log('value', typeof value)
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

    sortHymn() {
      this.hymns.sort((a, b) => (a.title > b.title) ? 1 : -1)
    },

    filterHymns(value) {
      debugger
       value == 'all' ? this.allHymns() : this.filteredHymns(value);
    },
    allHymns(){
      this.testFilters = this.hymns;
    },
    filteredHymns(value) {
      debugger
      let results = this.hymns.filter((hymn) => {
         return hymn.category.name.toLowerCase() === value.toLowerCase()
       })
       this.testFilters = results
      // console.log(results)
    },

    // zoom(level) {
    //   level === -1 ? this.panzoom.zoomOut() : this.panzoom.zoomIn()
    // },

    getHymn() {
        fetch("https://catholic-hymns.herokuapp.com/hymns")
            .then(response => response.json())
            .then(data => {
              localStorage.setItem('hymns', JSON.stringify(data));
            })
            .catch(error => console.error(error))
    },
    getHymnFromLocalStorage () {
        if (localStorage.getItem('hymns') != null) {
            var data = JSON.parse(localStorage.getItem('hymns'));
            data.forEach(hymn => {
                this.hymns.push(hymn);
            })
        }
     }
  },

  // created() {
  //   HymnList.forEach(hymn => {
  //       this.hymns.push(hymn);
  //     }),
  //     this.sortHymn()
  // },

  beforeMount() {
     this.getHymn();
     this.getHymnFromLocalStorage()
     this.sortHymn()
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
