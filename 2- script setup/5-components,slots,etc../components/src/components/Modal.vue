<template>
    <teleport to=".modals-container">
            <div 
                class="modal"
            >
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sint itaque quisquam minima excepturi repudiandae veniam
                    ipsa harum officiis, laboriosam perferendis accusamus sequi dicta,
                    ullam tempore unde libero, error asperiores fugiat?</h1>
                <button>Hide modal</button>
            </div>
        </teleport>
</template>


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