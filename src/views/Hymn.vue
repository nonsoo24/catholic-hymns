<template>
  <div class="home">
    <Nav class="mb-6" />
    <SideNavBar />
    <section>
      <div class="catholic-hymns">


        <!-- hymn div -->
        <div id="hymn-body" class="hymns  w-11/12">

          <div class="flex">
            <!-- back arrow  -->
            <span class="cursor-pointer font-bold text-lg mr-4" @click="backHome">
              <figure> <img src="../assets/Img/back-arrow.png" alt="back-arrow" width="20px" height="20px"> </figure>
            </span>
            <!-- hymn number and title -->
            <!-- <h5 class="font-bold mb-6"><span class="hymn-number">{{hymns.number}}.</span> {{hymns.title}}</h5> -->
            <h5 class="font-bold mb-6">{{hymns.title}}</h5>
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
              <li v-for="(hymn, i) in hymns.verses" :key="i" class="p-5">{{hymn.verse.replace(/\\n/g, '')}}</li>
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

    computed: {
      // lineBreak() {
      //    return this.hymns.verses.replace(/\n/g, '<br>');
      //    console.log(this.hymns.verses)
      // }
    },
    methods: {
      //  lineBreak() {
      //    this.hymns.verses.forEach((hymn, i) => {
      //       console.log(hymn.verse.replace(/\n/g, 'food'))

      //    });

      //    console.log(this.hymns)
      // },
      backHome() {
        this.$router.push({
          path: '/'
        })

      },

      async getHymnProperty() {
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
            this.hymns.hasOwnProperty('chorus') ? chorusDiv.style.display = 'block' : chorusDiv
              .style
              .display = 'none';

            //if hymn id from details doesn't match that from URL then it goes to fetch from the DB
          } else {
            try {
              const baseURL = "https://catholic-hymns.herokuapp.com/hymns/" + this.$route.params._id,
                response = await fetch(baseURL),
                data = await response.json();
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

            } catch (err) {
              console.log(err)
            }
          }
          // if details from local storage is null, it goes to fetch from the DB
        } else {

          try {
            const baseURL = "https://catholic-hymns.herokuapp.com/hymns/" + this.$route.params._id,
              response = await fetch(baseURL),
              data = await response.json();

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
              //console.log(this.hymns)
            } else {
              localHymns.push(newhymn);
              localStorage.setItem('hymnProperty', JSON.stringify(localHymns));
              this.hymns = newhymn;
              //console.log(this.hymns)
            }

            this.hymns.hasOwnProperty('chorus') ? chorusDiv.style.display = 'block' : chorusDiv
              .style.display = 'none';
          } catch (err) {
            console.log(err)
          }

        }
      }
    },
    // created() {
    //   this.getHymnProperty()
    // }

    async mounted() {
      await this.getHymnProperty()
      // this.lineBreak()
    }
  }
</script>

<style>


 .hymn-number {
   padding-right: 10px !important;
 }

 #hymn-body {
    padding: 0px 15px 60px 15px;
 }

 /* #chorus, #verses {
   margin-left: 80px;
 } */
</style>
