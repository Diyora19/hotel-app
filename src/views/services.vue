<template>
  <div class="xizmatlar">
    <v-text-field class="mx-5" label="Search" v-model="search"></v-text-field>

    <div id="table">
      <v-container>
        <v-row>
          <v-col md="3" sm="3" lg="3">
            <h5>Xizmat turi</h5>
          </v-col>
          <v-col md="3" sm="3" lg="3">
            <h5>Sifati</h5>
          </v-col>
          <v-col md="3" sm="3" lg="3">
            <h5>Xizmat vaqti</h5>
          </v-col>
          <v-col md="3" sm="3" lg="3">
            <h5></h5>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row v-for="list in cloneList" :key="list.id" class="">
          <v-col md="3" sm="3" lg="3" class="ma-auto">
            {{ list.type }}
          </v-col>
          <v-col md="3" sm="3" lg="3" class="ma-auto">
            {{ list.rating }}
          </v-col>
          <v-col md="3" sm="3" lg="3" class="ma-auto">
            {{ list.time }}
          </v-col>
          <v-col md="3" sm="3" lg="3" class="ma-auto">
            <v-img
              :src="require(`../assets/img/${list.src}`)"
              alt="sorry"
              height="95px"
              width="135px"
              class="ma-auto"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container id="card">
      <v-row>
        <v-col sm="6" xs="12" v-for="list in cloneList" :key="list.id" id="mytable">
          <v-card class="ma-auto" max-width="344" outlined>
            <v-img
              :src="require(`../assets/img/${list.src}`)"
              alt="sorry"
              height="auto"
              width="100%"
            ></v-img>

            <v-card-title class="text-h5" v-text="list.type"></v-card-title>
            <v-list-item three-line>
              <v-list-item-content class="pt-0 grey--text">
                <div class="mb-1">Sifati {{ list.rating }}</div>
                <div class="mb-4">Xizmat vaqti {{ list.time }}</div>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
</template>

<script>
//https://www.booking.com/searchresults.html?aid=303948;label=london-1tltip3gY%2Awg6PVq105RgQS528791908258%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-373932636677%3Alp1028523%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Yf5EcukO1MOGLSSAuId8ToA;sid=3f177b2d52d219855a7b071c709ff0d9;dest_id=-2601889;dest_type=city;nflt=class%3D5&
export default {
  data() {
    return {
      listServices: [
        {
          type: "Tozalash",
          rating: "9/10",
          time: "7:00 - 9:00, 15:00 - 18:00",
          src: "cleaners.jpg",
        },
        {
          type: "Basseyn",
          rating: "8/10",
          time: "6:00 - 23:00",
          src: "basseyn.jpg",
        },
        {
          type: "Transport",
          rating: "9/10",
          time: "6:00 - 23:00",
          src: "cars.jpg",
        },
        {
          type: "Buyurtma berish",
          rating: "7/10",
          time: "6:00 - 23:00",
          src: "buyurtma.jpg",
        },
        {
          type: "Yuk eltish",
          rating: "9/10",
          time: "7:00 - 18:00",
          src: "yukEltish.jpg",
        },
        {
          type: "Yig'in va namoyishlar zali",
          rating: "10/10",
          time: "7:00 - 19:00",
          src: "namoyishZal.jpg",
        },
        {
          type: "Marosimlar zali",
          rating: "9/10",
          time: "7:00 - 22:00",
          src: "weddingHall.jpg",
        },
        {
          type: "Massaj",
          rating: "9/10",
          time: "7:00 - 9:00, 15:00 - 18:00",
          src: "massage.jpg",
        },
        {
          type: "Kir yuvish",
          rating: "9/10",
          time: "7:00 - 22:00",
          src: "kirYuvish.jpg",
        },
        { type: "Tibbiy", rating: "8/10", time: "24/7", src: "medics.jpg" },
        {
          type: "Texnik",
          rating: "9/10",
          time: "7:00 - 9:00, 15:00 - 18:00",
          src: "texnik.jpg",
        },
        {
          type: "Kutubxona",
          rating: "10/10",
          time: "6:00 - 22:00",
          src: "library.jpg",
        },
        {
          type: "Mashg'ulotlar zali",
          rating: "8/10",
          time: "5:00 - 23:00",
          src: "sport.jpg",
        },
        {
          type: "Oshxona",
          rating: "9/10",
          time: "6:30 - 22:00",
          src: "oshxona.jpg",
        },
      ],
      search: "",
      cloneList: null,
      page: 1,
    };
  },

  watch: {
    search(val) {
      if (val) {
        this.cloneList = this.cloneList.filter((x) =>
          x.type.toLowerCase().includes(val.toLowerCase())
        );
      } else {
        this.cloneList = this.listServices;
      }
    },
  },
  mounted() {
    this.cloneList = [...this.listServices];
  },
 
};
</script>

<style>
@media (min-width: 100px) and (max-width: 600px) {
  #table {
    display: none;
  }
}
@media (min-width: 601px) and (max-width: 5000px) {
  #card {
    display: none;
  }
}
</style>
