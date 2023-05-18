<template>
  <div class="msgs">
    <h1>Mensagens</h1>
    <ul>
      <li v-for="(msg, index) in msgs" :key="index">
        <router-link :to="'/msgs/' + msg.id">{{ msg.title }}</router-link>
      </li>
    </ul>
  </div>
  <!-- <button @click="showMsgId">id</button>   -->
</template>
<script >
  // import { useRouter , useRoute } from 'vue-router'
  // const route = useRoute()

  // const showMsgID = () =>{
  //     alert('o id da mensagem é '+ route.params.id)
  // }

  export default {
    data() {
      return {
        msgs: [
          {
            id: 1,
            title: "Mensagem 1",
          },
          {
            id: 2,
            title: "Mensagem 2",
          },
          {
            id: 3,
            title: "Mensagem 3",
          },
        ],
      };
    },
  };
</script>

