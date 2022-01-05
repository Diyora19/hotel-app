<template>
  <div>
    <h4 class="h4 d-flex">Xona raqami: {{ this.$route.params.slug }}</h4>
    <div
      v-for="sourcee in this.source"
      :key="sourcee.slug"
      class="d-flex ma-auto sourcee link"
    >
      <!-- <router-link :to="{name: 'bola', params: {slug: sourcee.slug}}" class="link ma-auto">
        </router-link> -->
      <v-img
        :src="require(`../assets/img/${sourcee.src1}`)"
        alt="sorry"
        class="img"
        @click="img('src1')"
      ></v-img>
      <v-img
        :src="require(`../assets/img/${sourcee.src2}`)"
        alt="sorry"
        class="img"
        @click="img('src2')"
      ></v-img>
      <v-img
        :src="require(`../assets/img/${sourcee.src3}`)"
        alt="sorry"
        class="img"
        @click="img('src3')"
      ></v-img>
    </div>
    <v-container class="mt-5" v-show="a">
        <v-row class="mt-5">
            <v-col sm="12" md="12" lg="12" class="d-flex">
                <h2 class="ma-auto">{{ this.text }}</h2>
                
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <img :src="require(`../assets/img/${this.src}`)" alt="sorry" class="textImg" />
            </v-col>
            <v-col>
                <p class="text">
                    {{ this.text }} rerum cum ea sed, quod consequuntur quidem quas facilis
                    perferendis, dolor officia voluptatum suscipit earum iure eos itaque
                    modi ex quibusdam obcaecati, laborum commodi corporis eveniet laboriosam
                    libero. Cum incidunt soluta consequuntur. Consequuntur modi odit tenetur
                    aliquam enim nam consequatur, aliquid accusantium.
                </p>
            </v-col>
        </v-row>
    </v-container>

    <!-- <router-view :key="$route.path" class="mt-5"></router-view> -->
  </div>
</template>
<script>
export default {
    data() {
        return {
            images: [
                {slug: 7, src1: "room.jpg", src2: "bedroom3.jpg", src3: "toilet1.jpg"},
                {slug: 11, src1: "2.jpg", src2: "5.jpg", src3: "3.jpg"},
                {slug: 18, src1: "room2.jpg", src2: "bedroom1.jpg", src3: "3.jpg"},
                {slug: 50, src1: "4.jpg", src2: "room1.jpg", src3: "bath2.jpg"},
                {slug: 67, src1: "room3.jpg", src2: "bedroom2.jpg", src3: "bath3.jpg"},
                {slug: 36, src1: "room4.jpg", src2: "6.jpg", src3: "bath4.jpg"},
                
            ],
            texts: [
                {  text: "Living Room", srcc: "src1"},
                {  text: "Bed Room", srcc: "src2" },
                {  text: "Bath Room", srcc: "src3" }

            ], 
            a: false,
            src: `room.jpg`,
            text: null

        }
    },
   computed:{
       source(){
           return this.images.filter(n=>n.slug == this.$route.params.slug)
       },
   },
   methods:{
       img(val){
           this.a = true
            for (const element of this.source) {
               this.src =  element[val]
            }

            for (const element of this.texts) {
                if(element.srcc == val){
                    this.text = element.text
                }
            }   
       }
   }    
}
</script>

<style>
.sourcee {
  width: 100%;
}
.link {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 200px;
}
.img {
  width: 30%;
  height: 100%;
  margin: 10px;
  cursor: pointer;
}
.textImg{
    width: 100%;
    height: 250px;
}

.h4{
    margin: 25px 0 0 10px;
}
</style>