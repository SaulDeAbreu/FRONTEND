<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true" >Show modals</button>
        <modal
            v-model="showModal"
            @hideModal="showModal = flase"
            title="my modal title (via prop)"
            >
            
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet maxime excepturi, obcaecati repellat natus, earum sit unde nobis consectetur eum delectus velit ullam saepe corrupti consequatur quos praesentium fuga porro?</p>
        </modal>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import Modal from '@/components/Modal.vue'
    const showModal = ref(false)
</script>


<style>
.modal{
    background: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

</style>