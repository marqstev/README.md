var app = new Vue({
    el: '#memberPage',
    data:{
      memberList: [],
      newMbForm: {}
    },

    methods: {
      newMbData() {
        return {
          firstName: "",
          lastName: "",
          dob: "",
          gender: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          email: "",
          primaryPhoneNumber: "",
          startDate: "",
          officialPosition: "",
          radioNumber: "",
          stationNumber: "",
          isActive: ""
        }
      },

      handleNewMbForm( evt ) {
        // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

        // TODO: Validate the data!

        fetch('api/index/index_post.php', {
          method:'POST',
          body: JSON.stringify(this.newMbForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.memberList=json;
          this.newMbForm=this.newMbData();
        });
      }
    },

  created (){
    this.newMbForm=this.newMbData();
      fetch("api/index/")
      .then(response => response.json())
      .then(json => {
        this.memberList=json;
        console.log(json)}
  );
}
});
