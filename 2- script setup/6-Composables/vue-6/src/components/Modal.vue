<template>
    <teleport to =".modals-container">
        <div
            v-if="modelValue"
            class="modal"
        >
            <h1>{{ title }}</h1>
            <slot />
            <button @click="$emit('update:modelValue',false)">Hide modal</button>
        </div>

    </teleport>
</template>

<script setup>
    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: 'No title specified'
        }
    })

    const emit = defineEmits(['update:modelValue','hideModal'])

    const handleButtonClick = () => {
        emit('hideModal')
    }
</script>

<style>
.modal{
    background: beige;
    padding: 10px;
    color: black;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

</style>