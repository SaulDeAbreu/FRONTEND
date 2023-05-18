<template>
    <h1 v-if="!!user">contatos de {{ user.uid }}</h1>
    <input type="email" v-model="email">&nbsp; <input type="password" v-model="password"><button @click="login">Login</button>
</template>
<script>
import firebase from 'firebase'
export default{
    data(){
        return{
            email:'',
            password:'',
            user:null
        }
    },
    methods:{
        login(){
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email,this.password)
            .then(
                ()=>{
                    alert('success')
                    this.user = firebase.auth().currentUser
                }
            )
        }
    },
    created (){
        this.user =firebase.auth().currentUser
    }
}
</script>