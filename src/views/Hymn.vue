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

        <div class="hymns  w-9/12">
          <h6 class="font-bold mb-6"> Chorus: </h6>
          <p class="mb-6">
            This is my story, this is my song,
            Praising my Saviour all the day long;
            This is my story, this is my song,
            Praising my Saviour all the day long.
          </p>
          <ol start="1">
            <li>Blessed assurance, Jesus is mine.
              Oh, what a foretaste of glory Divine.
              Heir of salvation, purchase of God,
              Born of the spirit, washed in his blood.
            </li>
            <li>Perfect submission, perfect delight,
              Visions of rapture now burst on my sight;
              Angels descending, bring from above
              Echoes of mercy, whispers of love.
            </li>
            <li>Perfect submission, all is at rest,
              I in my Saviour am happy and blest;
              Watching and waiting, looking above,
              Filled with his goodness, lost in his love.
            </li>
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
       }
     },
     name: 'Home',
     components: {
       Nav,
       SideNavBar
     },

     methods: {
       hymnDetails () {
         debugger
        // let hymnn = this.hymns.find((e) => e.id == id)
         for(let i = 0; i < this.hymns.length; i++) {
           console.log(this.hymns[i].verses)
         }
       }

     },
     created() {
       HymnList.forEach(hymn => {
         this.hymns.push(hymn);
       }),
       this.hymnDetails()
     }
   };
</script>

<style>
  .catholic-hymns {
    margin: 120px 0 0 300px;
    /* padding: 0 15px; */

  }

  .hymns {
    padding: 30px 15px 60px 15px;
  }

  ol {
     list-style-type: decimal;
  }

  .hymns li {
    padding: 20px 20px;
    cursor: pointer;
  }
  span {
    padding-right: 30px;
  }
</style>
