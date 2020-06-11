<template>
  <div>
    <nav id="mySidenav" class="sidenav">
      <ul class="navbar-nav">
        <router-link id="home" class="nav-link" to="/" tag="li" active-class="active" exact>
          Home</router-link>

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

      <div class="ml-2 hymn-categories">
        <div class="mb-5">
          <input type="radio" name="category" id="entrance" value="entrance">
          <label for="entrance">Entrance Hymns</label>
        </div>

        <div class="mb-5">
          <input type="radio" name="category" id="offertory" value="offertory">
          <label for="offertory">Offertory Hymns</label>
        </div>

        <div class="mb-5">
          <input type="radio" name="category" id="consercation" value="consercation">
          <label for="consercation">Consercation Hymns</label>
        </div>

        <div class="mb-5">
          <input type="radio" name="category" id="communion" value="communion">
          <label for="communion">Communion Hymns</label>
        </div>

        <div class="mb-5">
          <input type="radio" name="category" id="closing" value="closing">
          <label for="closing">Closing Hymns</label>
        </div>

        <div class="mb-5">
          <input type="radio" name="category" id="indigenous" value="indigenous">
          <label for="indigenous">Indigenous Songs</label>
        </div>

      </div>
    </nav>
  </div>
</template>


<script>
export default {
    data() {
        return {
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
         display: block;
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
         padding-left: 40px !important;
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
</style>
