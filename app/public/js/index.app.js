var app = new Vue({
    el: '#memberPage',
    data:{
      memberList: [],
      newMbForm: {},
      updateMbForm: {},
      memberRecord: {}
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
      },

      handleUpdateMbForm( evt ) {
        // evt.preventDefault();  // Redundant w/ Vue's submit.prevent
        // TODO: Validate the data!

        fetch('api/index/update.php', {
          method:'POST',
          body: JSON.stringify(this.updateMbForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.memberList=json;
          this.updateMbForm=this.newMbData();
        });
      },

      deleteMember(){
        fetch('api/index/delete.php', {
          method:'POST',
          body: JSON.stringify(this.memberRecord),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then (response => response.json())
        .then ( json => {memberPage.memberList = json})
        .catch (err => {
          console.error('error');
          console.error(err);
        })
        this.memberRecord=this.newMbData();

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
