var app = new Vue({
    el: '#memberId',
    data:{
      records: [{
      firstName: '',
      lastName: '',
      address: '',
     city: '',
     state: '',
     zipCode: '',
     email: '',
     primaryPhoneNumber: '',
     dob: '', 
     startDate: '', 
     gender: '',
     officialPosition: '',
     radioNumber: '',
     stationNumber: '',
     isActive: ''
    }]
},

    methods: {
     fetchUser(){
        fetch('api/records/')
          .then(response => response.json())
          .then(json => {
              this.records=json;
              console.log(this.records);

          });
        

     }

    }})
    