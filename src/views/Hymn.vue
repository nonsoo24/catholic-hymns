<template>
  <div class="home">
    <Nav class="mb-6" />
    <SideNavBar />
    <section>
      <div class="catholic-hymns">
        <!-- <span class="ti-search"></span>  -->
        <!-- <input type="text"
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500"
          placeholder="Search Hymns"> -->

        <div class="hymns  w-9/12" v-for="(hymn, i) in hymns" :key="i">
          <h5 class="font-bold mb-6"> {{hymn.title}}</h5>
          <h6 class="font-bold mb-3 mt-4 chorus"> Chorus: </h6>
          <p class="mb-6">
            {{hymn.chorus}}
          </p>
          <ol>
            <li v-for="(verse, i) in hymn.verses" :key="i">{{hymn.verses[i]}}</li>
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
import {
  HymnList
} from '@/components/Hymn.js'

export default {

  data() {
    return {
      hymns: [],
    }
  },
  name: 'Home',
  components: {
    Nav,
    SideNavBar
  },

  //  methods: {
  //    hymnDetails () {
  //     debugger
  //      let hymnn = this.hymns.find((e) => e.id == id)
  //      for(let i = 0; i < this.hymns.length; i++) {
  //        console.log(this.hymns[i].verses)
  //      }
  //    }

  //  },
  created() {
    let hymnId = this.$route.params.id;
    HymnList.forEach(hymn => {
        if (hymn.id == hymnId) {
          this.hymns.push(hymn);
        }
    })
  },
  // updated() {},
  mounted() {
    this.hymns.forEach(hymn => {
        //debugger
        if (hymn.chorus == '') {
            let chorus = document.querySelector('.chorus');
            chorus.style.display = 'none'
        }
      })
  }
}
</script>

<style>
  .catholic-hymns {
    margin: 120px 0 0 300px;
  }

  .hymns {
    padding: 30px 15px 60px 15px;
  }

  ol {
     list-style-type: decimal;
  }

  .hymns li {
    padding: 20px 20px;
  }
  span {
    padding-right: 30px;
  }
</style>
