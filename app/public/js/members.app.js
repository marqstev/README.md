var app = new Vue({
    el: '#memberPage',
    data:{
      memberList: [],
      activeMb: null,
      mbForm: {
      },
      newMbForm: {}
    },
    computed: {
      activeMbName() {
        return this.activeMb ? this.activeMb.lastName + ', ' + this.activeMb.firstName : ''
      }
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
          primaryPhoneNumber: ""
        }
      },
      handleNewMbForm( evt ) {
        // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

        // TODO: Validate the data!

        fetch('api/members/post.php', {
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
          this.memberList.push(json[0]);
        });

        console.log("Creating (POSTing)...!");
        console.log(this.newMbForm);

        this.newMbForm = this.newMbData();
      },
      handleTriageForm( evt ) {
        console.log("Form submitted!");

        this.mbForm.pt = this.activeMb;
        console.log(this.mbForm);

      }
    },
    created() {
      fetch("api/members/")
      .then( response => response.json() )
      .then( json => {
        this.memberList = json;

        console.log(json)}
      );
      this.newMbForm = this.newMbData();
    }
  })
