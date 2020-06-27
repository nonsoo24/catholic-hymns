<template>
  <div class="home">
    <Nav class="mb-6" />
    <SideNavBar />
    <section>
      <div class="catholic-hymns">


        <!-- hymn div -->
        <div class="hymns  w-11/12">

          <div class="flex">
             <!-- back arrow  -->
        <!-- <span class="ti-arrow-left cursor-pointer font-bold text-lg mt-1" @click="backHome"></span> -->
                  <!-- hymn number and title -->
          <h5 class="font-bold mb-6"><span>{{hymns.number}}.</span> {{hymns.title}}</h5>
          </div>


          <!-- chorus div -->
          <div id="chorus">
            <h6 class="font-bold mb-3 mt-4"> Chorus: </h6>
            <p class="mb-6 chorus-body">
              {{hymns.chorus}}
            </p>
          </div>

          <!-- hymn verses -->
          <div id="verses">
            <ol class="list-decimal">
              <li v-for="(hymn, i) in hymns.verses" :key="i" class="p-5">{{hymn.verse}}</li>
            </ol>
          </div>

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
      hymns: {}
    }
  },
  name: 'Home',
  components: {
    Nav,
    SideNavBar
  },

  methods: {
    backHome() {
      this.$router.push({
        path: '/'
      })

    },

    getHymnProperty() {
      debugger
      //get hymn id from URL
      var routeParams = this.$route.params._id;

      //get hymn details from local storage, convert it to object and assign it to a variable
      var details = JSON.parse(localStorage.getItem('hymnProperty'));

      //get id of chorus div and assign it to a variable
      let chorusDiv = document.querySelector('#chorus')

      //checks if hymn details from local storage is not null
      if (details != null) {
        //Finds hymn id from details and checks if hymn id from details is the same as hymn id from URL
        var idFound = details.find(ele => ele._id == routeParams);

        if (idFound) {
          this.hymns = idFound;

          //checks if hymn object contains chorus then hide or show the chorus div
          this.hymns.hasOwnProperty('chorus') ? chorusDiv.style.display = 'block' : chorusDiv.style
            .display = 'none';

          //if hymn id from details doesn't match that from URL then it goes to fetch from the DB
        } else {
          fetch("https://catholic-hymns.herokuapp.com/hymns/" + this.$route.params._id)
            .then(response => response.json())
            .then(data => {
              let newhymn = {}

              // checks if the data coming contains chorus then re-assigns data object to newhymn
              if (data.hasOwnProperty('chorus')) {
                newhymn = {
                  _id: data._id,
                  title: data.title,
                  number: data.number,
                  chorus: data.chorus.chorus,
                  verses: data.verses
                }
              } else {
                newhymn = {
                  _id: data._id,
                  title: data.title,
                  number: data.number,
                  verses: data.verses
                }
              }

              var localHymns = JSON.parse(localStorage.getItem('hymnProperty'));
              if (localHymns == null) {
                // debugger
                localHymns = [];
                localHymns.push(newhymn);
                localStorage.setItem('hymnProperty', JSON.stringify(localHymns));
                this.hymns = newhymn;

              } else {
                localHymns.push(newhymn);
                localStorage.setItem('hymnProperty', JSON.stringify(localHymns));
                this.hymns = newhymn;
              }

              this.hymns.hasOwnProperty('chorus') ? chorusDiv.style.display = 'block' : chorusDiv
                .style.display = 'none';

            })
            .catch(error => console.error(error))
        }
        // if details from local storage is null, it goes to fetch from the DB
      } else {
        fetch("https://catholic-hymns.herokuapp.com/hymns/" + this.$route.params._id)
          .then(response => response.json())
          .then(data => {
            let newhymn = {};
            if (data.hasOwnProperty('chorus')) {
              newhymn = {
                _id: data._id,
                title: data.title,
                number: data.number,
                chorus: data.chorus.chorus,
                verses: data.verses
              }
            } else {
              newhymn = {
                _id: data._id,
                title: data.title,
                number: data.number,
                verses: data.verses
              }
            }

            var localHymns = JSON.parse(localStorage.getItem('hymnProperty'));
            if (localHymns == null) {
              localHymns = [];
              localHymns.push(newhymn);
              localStorage.setItem('hymnProperty', JSON.stringify(localHymns));
              this.hymns = newhymn;
            } else {
              localHymns.push(newhymn);
              localStorage.setItem('hymnProperty', JSON.stringify(localHymns));
              this.hymns = newhymn;
            }

            this.hymns.hasOwnProperty('chorus') ? chorusDiv.style.display = 'block' : chorusDiv
              .style.display = 'none';

          })
          .catch(error => console.error(error))
      }
    }
  },
  // created() {
  //   this.getHymnProperty()
  // }

  mounted() {
    this.getHymnProperty()
  }
}
</script>

<style>
@media only screen and (min-width:320px) {
    .catholic-hymns {
      margin: 110px 0 0 90px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .catholic-hymns {
      margin: 110px 0 0 90px;
    }

  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .catholic-hymns {
      margin: 110px 0 0 250px;
    }

  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {

    .catholic-hymns {
      margin: 110px 0 0 300px;
    }

  }

  @media only screen and (min-width:320px) {
    .hymns {
      padding: 30px 1px 0px 15px;
    }
  }

  @media only screen and (min-width: 992px) {
    .hymns {
      padding: 30px 15px 60px 15px;
    }

  }

 span {
   padding-right: 10px;
 }

 /* #chorus, #verses {
   margin-left: 80px;
 } */
</style>
