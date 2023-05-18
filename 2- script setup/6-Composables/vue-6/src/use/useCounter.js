import { reactive, computed, watch, onMounted, nextTick } from 'vue'

export function useCounter() {

    const counterData = reactive({
        count: 0,
        increase: 0,
        title: 'My Counter'
    })


    watch(() => counterData.count, (newCount) => {
        if (newCount === 20) {
            alert('Way to go! You made it to 20!!')
        }
    })

    const oddOrEven = computed(() => {
        if (counterData.count % 2 === 0) return 'even'
        else return 'odd'
    })

    const increaseCounter = () => {
        counterData.count++
    }

    const decreaseCounter = () => {
        counterData.count--
    }
    const dobrarCounter = () => {
        counterData.count = counterData.count * 2;
    }
    const dividirCounter = () => {
        counterData.count = counterData.count / 2;
    }
    const increaseRandom = () => {
        counterData.count = counterData.count + counterData.increase;
    }

    return {
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter,
        dobrarCounter,
        dividirCounter,
        increaseRandom
    }
}
