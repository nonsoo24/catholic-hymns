<template>
  <div>
    <nav id="mySidenav" class="sidenav">
      <ul class="navbar-nav">
        <router-link id="home" class="nav-link" to="/" tag="li" active-class="active" exact>
        <figure>
            <img class="mr-5 flex w-8 h-8" src="../assets/Img/hymn-icon.png" alt="hymn-book">
        </figure>
         <span class="menu-title">Home</span>
        </router-link>

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

          <label :for= hymnCategory.id  class="font-bold capitalize">{{hymnCategory.id}}</label>
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
          id: 'advent',
          name: 'category'
        },
        {
          id: 'communion',
          name: 'category'
        },
         {
          id: 'easter',
          name: 'category'
        },
        {
          id: 'entrance',
          name: 'category'
        },
         {
          id: 'indigenous',
          name: 'category'
        },
         {
          id: 'lent',
          name: 'category'
        },
        {
          id: 'offertory',
          name: 'category'
        },
        {
          id: 'recessional',
          name: 'category'
        },
      ]
    }
  },

  methods: {
    category(value) {
      this.$emit('update', this.selectedCategory);
    }
  },
}
</script>

<style>
@media only screen and (min-width:320px) {
      .sidenav {
         height: 100%;
         width: 0;
         position: fixed;
         z-index: 2;
         /* top: 0;
         right: 0; */
         background-color: #fff;
         /* box-shadow: 0 0 1px 2px #E2E2E2; */
         /* opacity: 0.5; */
         overflow-x: hidden;
         transition: 0.5s;
         padding-top: 140px;
         top: 0;
         width: 70px;
         border-right: 1px solid #000;
         display: none;
     }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
        .sidenav {
         height: 100%;
         width: 0;
         position: fixed;
         z-index: 1;
         /* top: 0;
         right: 0; */
         background-color: #fff;
         /* box-shadow: 0 0 1px 2px #E2E2E2; */
         /* opacity: 0.5; */
         overflow-x: hidden;
         transition: 0.5s;
         padding-top: 140px;
         top: 0;
         width: 70px;
         border-right: 1px solid #000;
         display: block;
     }

  }

  @media only screen and (min-width: 992px) {
        .sidenav {
         height: 100%;
         width: 0;
         position: fixed;
         z-index: 1;
         /* top: 0;
         right: 0; */
         background-color: #fff;
         /* box-shadow: 0 0 1px 2px #E2E2E2; */
         /* opacity: 0.5; */
         overflow-x: hidden;
         transition: 0.5s;
         padding-top: 130px;
         top: 0;
         width: 70px;
         border-right: 1px solid #000;
         display: block;
     }

  }

     .sidenav li {
         text-decoration: none !important;
         font-size: 1.2rem;
         color: #000 !important;
         display: flex;
         transition: 0.3s;
         text-align: left;
     }

     .sidenav li:hover {
         cursor: pointer;
     }

     /* .router-link-exact-active {
         color: #fff !important;
     } */

     @media screen and (max-height: 450px) {
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

     .menu-title {
       display: none;
     }

     .hymn-categories {
       padding: 90px 0 0 20px;
       display: none;
     }

     .hymn-categories label {
       padding-left: 10px;
       font-size: 0.9rem;
     }

     #mySidenav .navbar-nav .nav-link:hover {
         color: rgb(253, 179, 42);
     }

     /* #mySidenav img {
       width: 30px;
       height: 30px;
       display: flex;
     } */
</style>
