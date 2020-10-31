var app = new Vue({
    el: '#memberPage', //Here down
    data:{
      memberList: [],
      newMbForm: {}
    },

    methods: {
      newMbData() { //Here down
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

        fetch('api/reports/post.php', {
          method:'POST',
          body: JSON.stringify(this.newMbForm), //Here
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.memberList=json; //Here
          this.newMbForm=this.newMbData(); //Here
        });
      }
    },

  created (){
    this.newMbForm=this.newMbData(); //Here
      fetch("api/reports/")
      .then(response => response.json())
      .then(json => {
        this.memberList=json; //Here
        console.log(json)}
  );
}
});
