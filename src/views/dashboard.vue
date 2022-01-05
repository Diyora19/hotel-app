<template>
  <div>
    <v-container>
      <v-row dense class="ma-5">

        <v-col
          v-for="(item, i) in items"
          :key="i"
          xlg="4" lg="4" md="6" sm="12" xsm="12"

        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5 my-2"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle class="grey--text text--lighten-2 lorem" >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ea officia sequi, atque repellat ipsam quo nemo eveniet consectetur cumque.
                </v-card-subtitle>

                <v-card-actions>
                 
                  <v-btn
                    outlined
                    rounded
                    small
                    class="ma-2 pa-4"
                    link
                    router
                    :to="item.path"
                  >
                    VIEW MORE
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="my-auto mx-5"
                size="125"
                tile
              >
                <v-img :src="require(`../assets/img/${item.src}`)"></v-img>
              </v-avatar>
            </div>
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
        {title: "Xonalar", src: "5.jpg", color: "blue", path: "/rooms"},
        {title: "Xizmatlar", src: "texnik.jpg", color: "purple", path: "/services"},
        {title: "Xodimlar", src: "woman3.jpg", color: "green", path: "/staff"}
      ]
      
    }
  },
}
</script>
<style>
 .lorem{
   line-height: 1.4!important;
   font-size: 12px!important;
 }
 .row{
   display: flex;
   justify-content: center;

 }
  @media (min-width: 350px) and (max-width: 500px) {
    .col-sm-12{
      min-width: 100%!important;
      margin: 0!important;
    }
  }
  @media (min-width: 500px) and (max-width: 700px) {
    .col-sm-12{
      flex: 0 0 100%;
      max-width: 80%!important;
      
    }
  }
  @media (min-width: 700px) and (max-width: 960px) {
    .col-sm-12{
      flex: 0 0 100%;
      max-width: 70%!important;
      
    }
  }
  
</style>


