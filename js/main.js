const app = new Vue({
    el: '#app',
    data: {
      cds: [],
      actualGenre: "all"
    },

    created() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        
        .then( response => {
            // handle success
            this.cds = response.data.response
          })
        .catch(error => {
            // handle error
            console.log(error);
          });
    },

    methods: {
        selectGenre () {
            axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        
        .then( response => {
            let cdsList = response.data.response;
            if (this.actualGenre !== "all") {
                cdsList = cdsList.filter( element => element.genre.toLowerCase() === this.actualGenre );
            }

            this.cds = cdsList
          })
        .catch(error => {
            // handle error
            console.log(error);
          });
        }

    }
  




}); //end
