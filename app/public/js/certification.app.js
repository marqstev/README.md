var app = new Vue({
  el: '#certifications',
  data: {
    existingcertifications: [{
      certificationId: '',
      title: '',
      expirationDate: '',
      certifyingAgency: ''
    }],

    newcertifications: {
      certificationId: '',
      title: '',
      expirationDate: '',
      certifyingAgency: ''
    }
  },

    methods: {
      fetchUser(){
        fetch('api/certified/')
        .then(response => response.json())
        .then(json => {
          this.existingcertifications=json;
          console.log(this.existingcertifications);
        });
      },

      CreateUser(){
        fetch('api/certified/post.php', {
          method:'POST',
          body: JSON.stringify(this.newcertifications),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.existingcertifications.push(json[0]);
          this.newcertifications = this.newCertificationsData();
        });
        console.log("Creating (POSTing)...!");
        console.log(this.newcertifications);
      },
      newCertificationsData() {
        return {
          certificationId: '',
          title: '',
          expirationDate: '',
          certifyingAgency: ''
        }
      }
    },
  created() {
      this.fetchUser();
    },
})
