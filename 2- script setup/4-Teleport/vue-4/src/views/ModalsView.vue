<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true" >Show modals</button>
        <teleport to=".modals-container">
            <div 
                v-if="showModal"
                class="modal">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sint itaque quisquam minima excepturi repudiandae veniam
                    ipsa harum officiis, laboriosam perferendis accusamus sequi dicta,
                    ullam tempore unde libero, error asperiores fugiat?</h1>
                <button @click="showModal = false">Hide modal</button>
            </div>
        </teleport>
    </div>
</template>

<script setup>
    import { ref } from "vue";
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