<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 w-full">

      <!-- logo -->
          <div class="flex items-center flex-shrink-0 text-white title">
            <svg @click="toggle()" class="hambuger cursor-pointer fill-current h-8 w-8 mr-2" viewBox="0 0 100 80"
              width="25" height="25" fill="#fff" stroke="#fff">
              <rect width="100" height="10" rx="8"></rect>
              <rect y="30" width="100" height="10" rx="8"></rect>
              <rect y="60" width="100" height="10" rx="8"></rect>
            </svg>
          </div>

          <div class="w-auto block flex-grow sm:flex sm:items-center lg:flex lg:items-center ml-8">
            <div class="text-sm lg:flex-grow text-white">
              <router-link to="/">
                <span class="font-semibold text-2xl tracking-tight logo-text text-white">Catholic
                  Hymns</span>
              </router-link>
            </div>
            <div>
              <!-- <a href="#"
                class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a> -->
            </div>
          </div>
            <!-- hamburger icon -->
              <!-- <div class="flex items-center flex-shrink-0 text-white title">
        <svg @click="toggle()" class="hambuger ml-2" viewBox="0 0 100 80" width="25" height="25" fill="#fff" stroke="#fff">
                    <rect width="100" height="10" rx="8"></rect>
                    <rect y="30" width="100" height="10" rx="8"></rect>
                    <rect y="60" width="100" height="10" rx="8"></rect>
        </svg>
      </div> -->
      <!-- <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Blog
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',

   data() {
        return {
            isClose: true
        }
    },


      methods: {
       
        toggle() {
         debugger
            let sideBar = document.getElementById("mySidenav");
            let text = document.querySelector(".logo-text");
            let hambuger = document.querySelector(".hambuger");
            let menuTitle = document.querySelector(".menu-title")
            let hymnCategory = document.querySelector(".hymn-categories")
            let catholicHymn = document.querySelector(".catholic-hymns")

           if(matchMedia("(min-width: 768px)").matches) {
              if (!this.isClose) {
                  sideBar.style.display = 'block'
                  sideBar.style.width = '70px'
                  hymnCategory.style.display = "none"
                  menuTitle.style.display = "none"
              } else {
                  sideBar.style.width = '220px'
                  hymnCategory.style.display = "block"
                  menuTitle.style.display = "block"
              }
            } else {
                if (!this.isClose) {
                   sideBar.style.display = 'none'
                  hymnCategory.style.display = "none"
                  menuTitle.style.display = "none"
                } else {
                  sideBar.style.display = 'block'
                  sideBar.style.width = '220px'
                  hymnCategory.style.display = "block"
                  menuTitle.style.display = "block"
                }
            }
            this.isClose = !this.isClose
        }
    }
};
</script>

<style scoped>
  nav {
    overflow: hidden;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
  }

  /* .router-link-exact-active {
      color: #fff !important;
  } */
</style>
