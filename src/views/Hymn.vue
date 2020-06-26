<template>
  <div class="home">
    <Nav class="mb-6" />
    <SideNavBar />
    <section>
      <div class="catholic-hymns">
        <!-- <div class="hymns  w-9/12" id="panzoom-element"> -->

        <!-- back arrow  -->
        <span class="ti-arrow-left" @click="backHome"></span>

        <!-- hymn div -->
        <div class="hymns  w-9/12">

          <!-- hymn number and title -->
          <h5 class="font-bold mb-6"><span>{{hymns.number}}.</span> {{hymns.title}}</h5>

          <!-- chorus div -->
          <div id="chorus">
            <h6 class="font-bold mb-3 mt-4"> Chorus: </h6>
            <p class="mb-6 chorus-body">
              {{hymns.chorus}}
            </p>
          </div>

          <!-- hymn verses -->
          <ol>
            <li v-for="(hymn, i) in hymns.verses" :key="i">{{hymn.verse}}</li>
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
//import Panzoom from '@panzoom/panzoom'
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

  // props: {
  //   options: {
  //     type: Object,
  //     default: () => {}
  //   },
  // },

  methods: {
    // zoom(level) {
    //   level === -1 ? this.panzoom.zoomOut() : this.panzoom.zoomIn()
    // },

    backHome() {
      this.$router.push({
        path: '/'
      })

    },

    getHymnProperty() {
      // debugger
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
                debugger
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


  mounted() {
    //debugger
    this.getHymnProperty()
    // this.panzoom = Panzoom(document.getElementById('panzoom-element'), {
    //   maxScale: 2
    // })
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

  .command {
    position: fixed;
    left: 1150px;
    top: 520px;
  }

  .command span {
    padding-right: 15px;
  }

  [class^="ti-"],
  [class*=" ti-"] {
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    left: 240px;
    top: 152px;
    cursor: pointer;
  }
</style>
