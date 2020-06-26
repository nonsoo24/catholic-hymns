<template>
  <div>
    <nav id="mySidenav" class="sidenav">
      <ul class="navbar-nav">
        <router-link id="home" class="nav-link" to="/" tag="li" active-class="active" exact> <img class="mr-5" src="../assets/Img/hymn-icon.png" alt="hymn"><span class="menu-title">Home</span> </router-link>

        <!-- <router-link id="hymn" class="nav-link" to="/Hymn" tag="li" active-class="active" exact>
                Hymns</router-link> -->


        <!-- <router-link id="about" class="nav-link" to="/about" tag="li" active-class="active" exact>
                Categories</router-link> -->

        <!-- <router-link id="skills" class="nav-link" to="/store" tag="li" active-class="active">Skills</router-link> -->
        <!--
            <router-link id="portfolio" class="nav-link" to="/portfolio" tag="li" active-class="active">Portfolio
            </router-link>

            <router-link id="blog" class="nav-link" to="/#" tag="li" active-class="active">Blog
            </router-link> -->

      </ul>
        <!-- <hymnCategory @update:option="optionUpdate" /> -->
      <div class="ml-2 hymn-categories">
        <div class="mb-5"  v-for="(hymnCategory, i) in hymnCategories" :key="i">
          <input v-model="selectedCategory" type="radio" :id = hymnCategory.id :value = hymnCategory.id :name = hymnCategory.category  v-on:change="category">

          <label :for= hymnCategory.id >{{hymnCategory.id}} Hymns</label>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
//import hymnCategory from './Category.vue'
export default {
  data() {
    return {
      selectedCategory: null,
      hymnCategories: [{
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
  // components: {
  //   hymnCategory
  // },

  methods: {
    // optionUpdate(value) {
    //   alert(value)
    // }

    category(value) {
      this.$emit('update', this.selectedCategory);
    }
  },
}
</script>

<style>
     .sidenav {
         height: 100%;
         width: 0;
         position: fixed;
         /* z-index: 9999; */
         /* top: 0;
         right: 0; */
         background-color: #fff;
         /* box-shadow: 0 0 1px 2px #E2E2E2; */
         /* opacity: 0.5; */
         overflow-x: hidden;
         transition: 0.5s;
         padding-top: 130px;
         top: 0;
         width: 220px;
         border-right: 1px solid #000;
     }

     .sidenav li {
         text-decoration: none !important;
         font-size: 1.2rem;
         /* color: #818181; */
         color: #000;
         display: flex;
         transition: 0.3s;
         text-align: left;
        /* list-style-type: circle !important; */
     }

     .sidenav li:hover {
         cursor: pointer;
     }

     .router-link-exact-active {
         color: rgb(253, 179, 42) !important;
     }

     @media screen and (max-height: 450px) {
         /* .sidenav {
             padding-top: 15px;
         } */

         .sidenav a {
             font-size: 2rem;
         }
     }

     #mySidenav .navbar-nav .nav-link {
         padding-left: 20px !important;
         color: #000;
         text-align: left;
         font-weight: 700;
     }

     .hymn-categories {
       padding: 90px 0 0 20px;
     }

     .hymn-categories label {
       padding-left: 10px;
       font-weight: 700;
       font-size: 0.9rem;
       text-transform: capitalize;

     }

     #mySidenav .navbar-nav .nav-link:hover {
         color: rgb(253, 179, 42);
     }

     .closebtn {
         font-size: 2rem;
         display: none;
         color: #000;
         position: absolute;
         right: 20px;
         text-decoration: none
     }

     .closebtn:hover {
         text-decoration: none;
         color: rgb(253, 179, 42);
     }

     #mySidenav img {
       width: 30px;
       height: 30px;
       display: flex;
     }
</style>
