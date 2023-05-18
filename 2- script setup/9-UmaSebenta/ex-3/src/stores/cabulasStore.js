import { defineStore } from 'pinia'

export const useCabulasStore = defineStore('cabulasStore',{
    actions:{
        deleteApontamento (idToDelete){
            this.apontamentos = this.apontamentos.filter(cabula => {return cabula.id !== idToDelete})
        },
        addApontamento (newApontamento){
            let id = new Date().getTime().toString()
            this.apontamentos.unshift({
                id,
                content: newApontamento
            })
        }
    },
    state: () => {
        return{
            apontamentos: [
                {
                    id:'id1',
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris1.'
                },
                {
                    id:'id2',
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris2.'
                },
                {
                    id:'id3',
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris3.'
                }
            ]
        }
    }
})