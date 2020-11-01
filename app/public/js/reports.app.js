var app = new Vue({
    el: '#reportsPage', //Here down
    data:{
      expiredList: [],
      reportMemberList: []
    },

    methods: {
      fetchMember(){
        fetch("api/index/")
        .then(response => response.json())
        .then(json => {
          this.reportMemberList=json; //Here
          console.log(json)
        });
      },
      fetchExpired(){
        fetch("api/reports/")
        .then(response => response.json())
        .then(json => {
          this.expiredList=json; //Here
          console.log(json)
        });
      }
    },

  created (){
      this.fetchMember();
      this.fetchExpired();
}
})
