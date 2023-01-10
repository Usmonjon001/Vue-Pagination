<template>
  <div class="pagination">
    <span 
        v-for="page in pages" :key="page" 
        @click="paginationNumber(page)"
        class="pagination__numbers"
        :class="{'page-selected': page === store.state.paginationPageNumber}"
        >
        {{ page }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const emit = defineEmits(['paginationNumber']);


const store = useStore();

const pages = computed(() =>{
    return Math.ceil(store.state.searchFilterDB.length / store.state.paginationCount)
})

const paginationNumber = (pageNum) =>{
    store.commit('setPaginationNum', pageNum)
}

</script>

<style>

.pagination{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
}

.pagination__numbers{
    border: 1px solid black;
    padding: 15px;
    display: inline-block;
    margin: 0px 10px;
    border-radius: 5px;
}

.page-selected{
    background-color: blue;
    color: white;
}

</style>