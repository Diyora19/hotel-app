<template>
    <div>
        
        <v-app-bar
        class="white grey--text"
        dense
        dark
        
        >
        <v-app-bar-nav-icon class="grey--text" @click="menu()"></v-app-bar-nav-icon>

        <v-toolbar-title>MEHMONXONA</v-toolbar-title>
        </v-app-bar>

       
        <v-navigation-drawer
        dense
        nav
        app
        v-model="drawer"
        height="100vh"
        class="pa-2 pt-5"
        >
        <v-list-item>
            <v-list-item-content>
            <v-list-item-title class="text-h6">
                Mehmonxona
            </v-list-item-title>
            <v-list-item-subtitle class="mt-1 grey--text text--lighten-1">
                Mehmonxona haqida qisqacha
            </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
            dense
            nav
        >
            <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            router :to="item.route"
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>
  
    </div>
</template>
<script>
export default {
    name: "TopManu",
    data() {
        return {
            items: [
                { title: 'Umumiy', icon: 'mdi-view-dashboard', route: '/' },
                { title: 'Xonalar', icon: 'mdi-home', route: '/rooms' },
                { title: 'Xizmatlar', icon: 'mdi-account-wrench', route: '/services' },
                { title: 'Xodimlar', icon: 'mdi-account-multiple', route: '/staff' }
            ],
            right: null,
            drawer: false
        }
    },
    methods: {
        menu(){
            this.drawer = !this.drawer
        }
    }
}
</script>
<style>

</style>