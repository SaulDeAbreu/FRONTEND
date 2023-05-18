<template>
    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos similique dignissimos eos nobis! Odit modi ipsum repellendus, vero accusamus sed eos cum et non maxime tempora, nulla dolores doloribus a!</h1>
<ul>
    <li v-for="(favorito, index) in favoritos" :key="index">{{ favorito }}</li>
</ul>
</template>






<script>
import firebase from 'firebase';
export default {
    name:'About',
    data(){
        return{
            users:[],
            user:null,
            favorito:[]
        }
    },
    created(){
        this.user = firebase.auth().currentUser
        firebase.database().ref('favoritos/'+this.user.uid).get().then((snapshot)=>{this.favoritos=snapshot.val()})
    }}
</script>