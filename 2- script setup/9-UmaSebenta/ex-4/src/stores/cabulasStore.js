import { defineStore } from 'pinia'

export const useCabulasStore = defineStore('cabulasStore',{
    getters:{
        totalApontamentos:(state)=>{
                return state.apontamentos.length
        },
        totalCarateres:(state)=>{
            let contador = 0 
            state.apontamentos.forEach(cabula=> {
                contador += cabula.content.length
            })
            return contador
        },
        getApontamentosContent:state=>{
            return(id)=>{
                return state.apontamentos.filter(cabula=>cabula.id === id)[0].content
            }
        }
    },
    actions:{
        updateApontamento (id ,content){
            let index = this.apontamentos.findIndex(cabula => cabula.id === id)
            this.apontamentos[index].content = content
        },
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