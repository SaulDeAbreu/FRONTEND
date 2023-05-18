<template>
    <div class="cabulas">
        <AddEditApontamento v-model="contentApontamento" ref="contentApontamentoRef">
            <template #buttons>
                <button class="button is-link is-light mr-3" 
                        @click="$event => $router.back()">
                    Cancelar
                </button>
                <button class="button is-link has-background-success"
                @click="handSaveClicked"
                        :disabled="!contentApontamento">
                    Gravar
                </button>
            </template>
        </AddEditApontamento>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { useRoute, useRouter } from "vue-router"
    import AddEditApontamento from "@/components/AddEditCabula.vue";
    import { useCabulasStore } from "@/stores/cabulasStore";

    const CabulasStore = useCabulasStore();
    const contentApontamento = ref('texto para gravar');
    const contentApontamentoRef = ref(null);

    const route = useRoute ()
    const router = useRouter ()
    const handSaveClicked = ()=>{
        CabulasStore.updateApontamentos(route.params.id,contentApontamento)
        route.push('/')
    }

    contentApontamento.value=CabulasStore.getApontamentosContent(route.params.id)
</script>