<template>
    <div class="cabulas">
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="content">
                    <textarea ref="newApontamentoRef" v-model="newApontamento" class="textarea" placeholder="Adicionar apontamento"></textarea>
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button class="button is-link has-background-success"
                            @click="addApontamentos"
                            :disabled="!newApontamento">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
        <Apontamento v-for="cabula in apontamentos" 
                    :key="cabula.id"
                    :cabula="cabula"
                    @deleteClicked="deleteApontamento"/>

    </div> 
</template>

<script setup>
import { ref } from "vue"
import Apontamento from '@/components/cabula.vue'

const newApontamentoRef = ref(null)
const newApontamento = ref('')
const apontamento = ref([
    {
        id: 'id1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi voluptatem laborum quos ipsa perferendis fugit. Illo soluta consectetur, beatae veritatis maxime est vitae illum iste cumque tempore laboriosam quae!'
    },
    {
        id: 'id2',
        content: 'Consequuntur...... ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi voluptatem laborum quos ipsa perferendis fugit. Illo soluta consectetur, beatae veritatis maxime est vitae illum iste cumque tempore laboriosam quae!'
    },
    {
        id: 'id3',
        content: 'Vero..... ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi voluptatem laborum quos ipsa perferendis fugit. Illo soluta consectetur, beatae veritatis maxime est vitae illum iste cumque tempore laboriosam quae!'
    },
    
])
const addApontamentos=()=>{
    // console.log(newApontamento.value)
    let id =new Date().getTime().toString()
    addApontamentos.value.unshift({
        id,
        content:newApontamento.value
    })
    newApontamento.value=''
    newApontamentoRef.value.focus()
}
const deleteApontamento = idToDelete => {
    apontamentos.value = apontamentos.value.filter(cabula => {return cabula.id !== idToDelete})
}

</script>