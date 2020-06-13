<template>
  <div class="home">
    <Nav class="mb-6" />
    <SideNavBar />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <section>
      <div class="catholic-hymns">
        <!-- <span class="ti-search"></span>  -->
        <input type="text"
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500"
          placeholder="Search Hymns" v-model="searchQuery">

        <div class="hymns  w-9/12" id="panzoom-element">
          <ol>
            <li v-for="(hymn, i) in filteredHymns" :key="i" @click="hymnLink(hymn.id)" @checked="categoryFilter">
              {{hymn.title}} </li>
            <!-- <li><span>2.</span>All Ye Who Seek A Comfort Sure</li>
            <li><span>3.</span>Almigthy Father Take This Bread</li>
            <li><span>4.</span>Are You Washed In the Blood?</li>
            <li><span>5.</span>Blessed Assurance </li>{{ $route.params}}
            <li><span>6.</span>Come, thou Almighty King </li>
            <li><span>7.</span>Come to the springs of living water</li>
            <li><span>8.</span>Cry out with joy to the Lord </li>
            <li><span>9.</span>Father, within thy house today </li>
            <li><span>10.</span>Happy Indeed is the man </li>
            <li><span>11.</span>Hark, my soul, how everything </li>
            <li><span>12.</span>Hear us , O Lord </li> -->
          </ol>
        </div>
         <div class="command">
            <button @click="zoom(1)"><span class="ti-zoom-in ti-3x"></span> </button>
            <button @click="zoom(-1)"><span class="ti-zoom-out ti-3x"></span></button>
        </div>

      <div class="ml-2 hymn-categories">
        <div class="mb-5"  v-for="(hymnCategory, i) in hymnCategories" :key="i">
          <input v-model="filterByCategory" type="radio" :id = hymnCategory.id :value = hymnCategory.id :name = hymnCategory.category>
          <label :for= hymnCategory.id >{{hymnCategory.id}} Hymns</label>
        </div>

        <!-- <div class="mb-5">
          <input v-model="filterByCategory" type="radio" name="category" id="entrance" value="entrance">
          <label for="entrance">Entrance Hymns</label>
        </div>

        <div class="mb-5">
          <input v-model="filterByCategory" type="radio" name="category" id="offertory" value="offertory">
          <label for="offertory">Offertory Hymns</label>
        </div>

        <div class="mb-5">
          <input v-model="filterByCategory" type="radio" name="category" id="consecration" value="consecration">
          <label for="consecration">Consecration Hymns</label>
        </div>

        <div class="mb-5">
          <input v-model="filterByCategory" type="radio" name="category" id="communion" value="communion">
          <label for="communion">Communion Hymns</label>
        </div>

        <div class="mb-5">
          <input v-model="filterByCategory" type="radio" name="category" id="closing" value="closing">
          <label for="closing">Closing Hymns</label>
        </div>

        <div class="mb-5">
          <input v-model="filterByCategory" type="radio" name="category" id="indigenous" value="indigenous">
          <label for="indigenous">Indigenous Songs</label>
        </div> -->

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
import Panzoom from '@panzoom/panzoom'

export default {

   data() {
       return {
         hymns: [],
         searchQuery: null,
         filterByCategory: null,
         hymnCategories: [
            {
              id: 'all',
              name: 'category'
            },
             {
              id: 'entrance',
              name: 'category'
            },
             {
              id: 'offertory',
              name: 'category'
            },
            {
              id: 'consecration',
              name: 'category'
            },
            {
              id: 'communion',
              name: 'category'
            },
            {
              id: 'closing',
              name: 'category'
            },
            {
              id: 'indigenous',
              name: 'category'
            }
         ]
       }
     },
     name: 'Home',
     components: {
       Nav,
       SideNavBar
     },

      props: {
        options: {type: Object, default: () => {}},
    },

     computed: {
       filteredHymns() {
         debugger
         if (this.searchQuery) {
           return this.hymns.filter((hymn) => {
             return this.searchQuery.toLowerCase().split(' ').every(v => hymn.title
             .toLowerCase().includes(v))
           })
         } else if(this.filterByCategory) {
            if(this.filterByCategory == 'all'){
              return this.hymns
            }
           return this.hymns.filter((hymn) => {
             return hymn.category.toLowerCase() == this.filterByCategory.toLowerCase()
           })
         } else {
           return this.hymns
         }
       }
   },

   methods: {
       hymnLink(id) {
         this.$router.push({
           name: 'Hymn',
           params: {id}
         })
       },

       sortHymn() {
         this.hymns.sort((a, b) => (a.title > b.title) ? 1 : -1)
       },

       categoryFilter(value){
         this.filterByCategory = value
         console.log(value)

       },


        zoom(level){
            level === -1 ? this.panzoom.zoomOut() : this.panzoom.zoomIn()
        }
     },

     created() {
       HymnList.forEach(hymn => {
           this.hymns.push(hymn);
         }),
         this.sortHymn()
     },

      mounted() {
        this.panzoom = Panzoom(document.getElementById('panzoom-element'), {
            maxScale: 2
        })
    }
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
