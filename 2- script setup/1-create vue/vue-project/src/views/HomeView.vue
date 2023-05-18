<template>
  <div class="home">

    <h3>{{ counterData.title }}</h3>

    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button  @click="increaseCounter(1)" class="btn">+</button>
      <button  @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <div class="edit">
      <h4>Edit counter title: </h4>
      <input v-model="counterData.title" type="text">
    </div>

    <div>
      <h4>edit incremeant:</h4>
      <button @click="modifyCounter">!</button>
      <input v-model="newIncrement" type="number">
    </div>
    
  </div>
</template>

<script setup>
import {reactive} from 'Vue'

const counterData = reactive ({
    count:0,
    title:'My counter',
    newIncrement :0
})
const increaseCounter =(amount)=>{
  counterData.count+= amount
}
const decreaseCounter = ()=>{
  counterData.count--
}
// const newIncrement = reactive(0)
const modifyCounter = ()=>{
  counterData.count+= (newIncrement)
}

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