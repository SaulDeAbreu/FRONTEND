<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true" >Show modals</button>
        <modal v-if="showModal"></modal>
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