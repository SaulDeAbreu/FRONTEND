<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show modal</button>
        <Modal 
        v-model="showModal"
        @hideModal="showModal=false"
        title="My modal title (via prop)">
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde, quisquam voluptas corporis placeat accusamus! Quibusdam optio, nihil minima necessitatibus temporibus accusamus quam modi cupiditate eos animi harum est corporis!</p>
            
        </Modal>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import Modal from '@/components/Modal.vue'
    
    const showModal = ref(false)
</script>
