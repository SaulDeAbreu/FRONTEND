<template>
    <h1>Mensagem individual</h1>
    <p>Conteúdo da mensagem com o ID: {{ $route.params.id }}</p>
    <p><RouterLink to="/Msgs">&lt; Voltar</RouterLink></p>
    <div class="msg-btn">
        <button @click="goFirstMsg">Primeira Mensagem</button>
        <button @click="goMsgs">Todas as mensagem</button>
        <button @click="goHome">Home</button>
        <button @click="showMsgId">id</button>
    </div>
    
</template>

<style>
    .msg-btn{
        display: flex;
        gap: 5px;
        margin-top: 15px;
    }
    </style>
<script setup>

import { RouterLink,useRoute, useRouter } from 'vue-router'
const router = useRouter()
const showMsgId = ()=>{
    alert('O id da Mensagem é '+route.params.id)
}

const goMsgs=()=>{
    router.push('/msgs')
}

const goHome=()=>{
    router.push({name:'home'})
}

const goFirstMsg = () =>{
    router.push({
        name: 'msg',
        params: {
            id: '1'
        }
    })
}
</script>
