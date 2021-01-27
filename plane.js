vm=new Vue({
  el:'#app',
  data:{
    regions:[
      {text:'北海道地方',value:'hokkaido',airports:['新千歳空港','函館空港']},
      {text:'関東地方',value:'kanto',airports:['羽田空港','成田空港']},
      {text:'関西地方',value:'kansai',airports:['関西空港','神戸空港']},
      {text:'沖縄地方',value:'okinawa',airports:['那覇空港','石垣空港']}
    ],
    departureRegion:'',
    destinationRegion:''
  }
})