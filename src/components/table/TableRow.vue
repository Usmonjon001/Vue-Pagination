<template>
    
    <tr v-for="obj in paginatedUsers()" :key="obj" class="table_row">
        <td>{{ obj.name }}</td>
        <td>{{ obj.brand }}</td>
        <td>{{ obj.artnumber }}</td>
        <td>{{ obj.weight }}</td>
        <td>{{ obj.quantaty }}</td>
        <td>{{ obj.price }}</td>
        <td>{{ obj.stock }}</td>
    </tr>
</template>

<script setup>
import axios from "axios";
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { useStore } from "vuex";

const store = useStore();

const paginatedUsers = () =>{
    let from = (store.state.paginationPageNumber - 1) * store.state.paginationCount;
    let to = from + store.state.paginationCount
    return store.state.searchFilterDB.slice(from, to);
};

</script>

<style>
.table_row {
}
</style>