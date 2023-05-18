<script >
  import { ref } from 'vue'
  import { useCounter } from '@/use/useCounter';
  import { RouterLink } from 'vue-router';

  export default {
    data() {
      return {
        mensagens: [{
          id: 1,
          title: "Mensagem 1"
        },
        {
          id: 2,
          title: "Mensagem 2"
        },
        {
          id: 3,
          title: "Mensagem 3"
        }
        ]
      }
    },
    setup() {
      
      const { counterData, increaseCounter } = useCounter()


      return { increaseCounter, counterData }
    }
  }

</script>
<template>
  <div class="msgs">
    <h1>Mensagens</h1>
    <ul>
      <li v-for="msg in mensagens">
        <RouterLink :to="'/msgs/' + msg.id">{{ msg.title }}</RouterLink>
      </li>
    </ul>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <div>
      <button @click="increaseCounter" class="counter-button">
        {{ counterData.count }}
      </button>
    </div>
  </div>
</template>