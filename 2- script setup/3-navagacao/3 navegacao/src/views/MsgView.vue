<template>
    <h1>Mensagens individual </h1>
    <p>conteudo da Mensagem com o ID: {{$route.params.id}}</p>
    <p><RouterLink to="/Msgs">&lt;Voltar</RouterLink></p>
    <!-- <button @click="showMsgID">ID</button> -->
    <div class="msg-btn">
        <button @click="goFirstMsg">primera mensagem</button>
        <button @click="goMsgs">todas as mensagens</button>
        <button @click="goHome">home</button>
    </div>
</template>
<script setup>
import { useRouter , useRoute } from 'vue-router'

const route = useRoute()

const goFirstMsg = () =>{
    router.push({
        name:'msg',
        params:{
            id: '1'
        }
    })
}

const goMsgs = () =>{
    router.push('/msgs')
}

const goHome = () =>{
    router.push({name:'home'})
}
</script>

<style>
.msg-btn{
    display: flex;
    gap: 5px;
    margin-top: 15px;
}
</style>

