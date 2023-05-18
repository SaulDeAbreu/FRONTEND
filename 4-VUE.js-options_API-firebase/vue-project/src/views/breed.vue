<template>
    <div v-for="(res,index) in resultado" :key="index">
        <img v-bind:src="res" width="150" alt="" @click="insereFavorito(res)">
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    name:'Breed',
    data(){
        return{
            resultado:"",
            user:null
        }
    },
    methods:{
        carregaInfo(query){
            this.axios.get("https://dog.ceo/api/breed/" + query + "/images")
            .then(res=> {
                this.resultado = res.data.message
            })
        },
        insireFavorito(res){
            firebase.database().ref(`/favoritos/${this.user.uid}/`).push().set(res)
                    .then(()=>{
                        console.log("data sent!")
                    })
        }
    },
    created(){
        this.carregaInfo(this.$route.params.id)
        this.user = firebase.auth().currentUser
    }
}
</script>