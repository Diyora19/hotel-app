<template>
  <div class="xonalar">
     <div class="ma-5">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="grey lighten-5 primary--text"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Filtrlash
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          link
          class="drItem"
          @click="fun(`${item.title}`)"
        >
          <v-list-item-title>{{ item.title }} bo'yicha</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
     </div>

    <v-container id="container">
      <v-row>
        <v-col v-for="list in lists" :key="list.id" md="6">
          <v-card
            class="card ma-auto"
            max-width="400"
            
          >
        <v-img
          class="cardImg"
          height="250px"
          :src="require(`../assets/img/${list.src}`)"
        >
        </v-img>
        <div class="hoverWrap">
          <v-card-title class="lux">LUX</v-card-title>

          <v-card-text class="text--primary cardText">
            <div>Raqami <span class="primary--text font-weight-medium">{{list.raqami}}</span></div>

            <div>
              Reytingi 
              <v-icon class="star">mdi-star</v-icon>
              <v-icon class="star">mdi-star</v-icon>
              <v-icon class="star">mdi-star</v-icon>
              <v-icon class="star">mdi-star</v-icon>
              <v-icon class="star">mdi-star</v-icon>
            </div>

            <div>Narxi <span class="primary--text">{{list.narxi}} UZS</span></div>
          </v-card-text>

        </div>

        <v-card-actions class="my-4 pb-3">
          <v-btn
            class="grey lighten-5 green--text btn"
          >
            Buyurtma qilish
          </v-btn>
          <v-spacer></v-spacer>
          <router-link :to="{name: 'show', params:{slug: list.raqami}}">

            <v-btn
              class="grey lighten-5 primary--text btn"
              
            >
              Ko'proq ko'rish
            </v-btn>
          </router-link>
        </v-card-actions>
          </v-card>

        </v-col>
      </v-row>
    </v-container>

     
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: 'Narxi' },
        { title: 'Raqami' }
      ],
      lists: [
        {id: 1, src: "room.jpg", raqami: 7, narxi: "580.000"},
        {id: 2, src: "5.jpg", raqami: 11, narxi: "560.000"},
        {id: 3, src: "bedroom1.jpg", raqami: 18, narxi: "550.000"},
        {id: 4, src: "4.jpg", raqami: 50, narxi: "500.000"},
        {id: 5, src: "bedroom2.jpg", raqami: 67, narxi: "510.000"},
        {id: 6, src: "6.jpg", raqami: 36, narxi: "570.000"},
      ],
      
    }
  },
  methods: {
    
    fun(val){
      let val1 = val.toLowerCase()
      this.lists.sort((a,b)=>a[val1] > b[val1] ? 1 : -1)
      
    },
    filters: {
      slug(val){
      let res = ''
      res += val && val.replaceAll('.', '-').replaceAll('--', '-')
      res.toLowerCase()
      return res
      }
    }

  },
  computed: {
    
  }
}
</script>

<style>
  .star{
    color: rgb(243, 222, 36)!important;
    font-size: 17px!important;
  }
  

  .hoverWrap{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 250px;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 5px 10px;
    overflow: hidden;
    transition: all 0.5s linear;
  }
  .lux{
    transform: translateY(200px);
    transition: all 0.3s linear;
    padding: 10px 16px;
    color: rgb(61, 60, 60);
    font-weight: 600;
  }

  .cardText{
    transform: translateY(200px);
    transition: 0.3s;
    
  }

  .card:hover .lux, .card:hover .cardText{
    transform: translateY(0);
    transition: all 0.3s linear;
    
  }
  .card:hover .cardText{
    transition-delay: 0.1s;
  }
  .card:hover .hoverWrap{
    background: linear-gradient(to top, rgba(255, 255, 255, 0.89), rgba(255, 255, 255, 0.767), transparent);
    transition: all 0.5s linear;
  }
  .btn{
    font-size: 12px!important;
    border-radius: 15px!important;
    text-decoration: none!important;;
  }
  #container{
    display: flex!important;
  }
</style>
