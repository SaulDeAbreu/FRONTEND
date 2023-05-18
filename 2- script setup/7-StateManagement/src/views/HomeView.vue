<template>
  <div class="home">
    <h3>{{ counterData.title }}</h3>
    <div>
      <button @click="dividirCounter">/2</button>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter" class="btn">+</button>
      <button @click="dobrarCounter">x2</button>
    </div>
    <div class="increase">
      <input v-model="counterData.increase" type="number">
      <button @click="increaseRandom">+</button>
    </div>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text">
    </div>

    <p>This counter is {{ oddOrEven }}</p>
  </div>
</template>

<script setup>
import { reactive, computed, watch} from 'vue'

import { useCounter } from '@/use/useCounter'

const { counterData, oddOrEven, increaseCounter, 
  decreaseCounter, dobrarCounter, dividirCounter, increaseRandom } = useCounter()

</script>

<style>
.home{
  text-align: center;
  padding: 20px;
}
.btn, .counter{
  font-size: 40px;
  margin: 10px;
}
</style>