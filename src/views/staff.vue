<template>
  <div class="xodimlar">
    <v-text-field class="mx-5" label="Search" v-model="search"></v-text-field>
    <v-container>
      <v-row>
        <v-col v-for="hodim in cloneHodimlar" :key="hodim.id" lg="3" md="4" sm="6" class="ma-auto">
          <v-img :src="require(`../assets/img/${hodim.src}`)" alt="sorry" class="hodimImg" width="100%" height="250" >
            <div class="hover">
              <div class="namee font-weight-bold mb-2">{{hodim.ismi}}</div>
              <div class="wrapp">
                <div>Yoshi <span class="blue--text text--darken-3">{{hodim.yoshi}}</span></div>
                <div>Lavozimi <span class="red--text font-weight-medium">{{hodim.lavozimi}}</span></div>
                <div>
                  Reytingi 
                  <v-icon class="star">mdi-star</v-icon>
                  <v-icon class="star">mdi-star</v-icon>
                  <v-icon class="star">mdi-star</v-icon>
                  <v-icon class="star">mdi-star</v-icon>
                  <v-icon class="star">mdi-star</v-icon>
                </div>

              </div>
            </div>

          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: null,
      cloneHodimlar: null,
      hodimlar: [
        {src: "woman1.jpg", ismi: "Anora", yoshi: 27, lavozimi: "Menedjer"},
        {src: "man1.png", ismi: "Muxammad", yoshi: 31, lavozimi: "Menedjer"},
        {src: "woman2.jpg", ismi: "Sitora", yoshi: 24, lavozimi: "Menedjer"},
        {src: "man2.png", ismi: "Bahodir", yoshi: 21, lavozimi: "Menedjer"},
        {src: "woman3.jpg", ismi: "Sohiba", yoshi: 21, lavozimi: "Menedjer"},
        {src: "mann.jpg", ismi: "Azamat", yoshi: 18, lavozimi: "Menedjer"},
        {src: "man4.jpg", ismi: "Nurmuxammad", yoshi: 20, lavozimi: "Menedjer"},
      ]
    }
  },
  watch:{
    search(val){
      let vall = val.toLowerCase()
      if(val){
        this.cloneHodimlar = this.hodimlar.filter(n => n.ismi.toLowerCase().includes(vall))
        console.log(this.cloneHodimlar)
      } 
      else {
        this.cloneHodimlar = this.hodimlar
      }
    }
  },
  mounted() {
    this.cloneHodimlar = [...this.hodimlar]
  },
}
</script>
<style>
.star{
    color: rgb(243, 222, 36)!important;
    font-size: 17px!important;
  }

.hover{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 20px;
  overflow: hidden;
  background: transparent;
  transition: 0.5s;
}


.hodimImg{
  position: relative;
}
.namee{
  transform: translateY(200px);
  font-size: 18px;
} 

.wrapp{
  transform: translateY(200px);
}

.hodimImg:hover .hover{
  background: linear-gradient(to top, rgba(255, 255, 255, 0.808), transparent);
  transition: all 0.3s linear;
}

.hodimImg:hover .namee, .hodimImg:hover .wrapp{
  transform: translateY(0);
  transition: all 0.3s linear;
}


.hodimImg:hover .wrapp{
  transition-delay: 0.1s;

}


</style>
