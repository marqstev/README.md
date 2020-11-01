var app = new Vue({
    el: '#reportsPage',
    data:{
      reportsList: [],
      newReportsForm: {}
    },

    methods: {
      newListData() {
        return {
          firstName: "",
          lastName: "",
          email: "",
          radioNumber: "",
          stationNumber: "",

        }
      },

      handleNewReportsForm( evt ) {
        // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

        // TODO: Validate the data!

        fetch('api/index/index_post.php', {
          method:'POST',
          body: JSON.stringify(this.newReportsForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.reportsList=json;
          this.newReportsForm=this.newReportsData();
        });
      }
    },

  created (){
    this.newReportsForm=this.newReportsData();
      fetch("api/index/")
      .then(response => response.json())
      .then(json => {
        this.reportsList=json;
        console.log(json)}
  );
}
});
