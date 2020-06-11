<template>
  <div class="home">
      <Nav class="mb-6" />
      <SideNavBar />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<section>
  <div class="catholic-hymns">
      <!-- <span class="ti-search"></span>  -->
      <input type="text" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" placeholder="Search Hymns" v-model="searchQuery">

      <div class="hymns  w-9/12">
        <ul v-for="(hymn, i) in filteredHymns" :key="i">
            <li @click="hymnLink(hymn.id)"><span>{{hymn.hymnNo}}.</span>{{hymn.title}}    </li>
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
        </ul>
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
        searchQuery: null
      }
    },
  name: 'Home',
  components: {
    Nav,
    SideNavBar
  },
 computed: {
    filteredHymns (){
      if(this.searchQuery){
      return this.hymns.filter((hymn)=>{
         return this.searchQuery.toLowerCase().split(' ').every(v => hymn.title.toLowerCase().includes(v))
      })
      }else{
        return this.hymns;
      }
    }
  },

 methods: {
            hymnLink(id) {
                this.$router.push({
                    name: 'Hymn',
                    params: { id }
                })
            }

            //this.$router.push({path:'/users',query:{name:'sai'}});
        },

  created() {
      HymnList.forEach(hymn => {
          this.hymns.push(hymn);
      })
    }
};
</script>

<style scoped>
  .catholic-hymns {
    margin: 130px 0 0 300px;
    /* padding: 0 15px; */

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
</style>
