<template>

    <table class="table_header" border="1">
        <input type="text" @keyup="filterdata()" placeholder="Filter Data..." v-model="searchtext">
        <tr>
            <th class="table_header_heading" @click="sortByName">
                <p>
                    Name
                    <span class="material-symbols-outlined">
                        sort
                    </span>
                </p>
            </th>
            <th class="table_header_heading" @click="sortByBrand">
                <p>
                    Brand
                    <span class="material-symbols-outlined">
                        sort
                    </span>
                </p>
            </th>
            <th class="table_header_heading" @click="sortByArtnumber">
                <p>
                    Art Number
                    <span class="material-symbols-outlined">
                        sort
                    </span>
                </p>
            </th>
            <th class="table_header_heading" @click="sortByWeight">
                <p>
                    Weight
                    <span class="material-symbols-outlined">
                        sort
                    </span>
                </p>
            </th>

            <th class="table_header_heading" @click="sortByQuantaty">
                <p>
                    Quantaty
                    <span class="material-symbols-outlined">
                        sort
                    </span>
                </p>
            </th>

            <th class="table_header_heading" @click="sortByPrice">
                <p>
                    Price
                    <span class="material-symbols-outlined">
                        sort
                    </span>
                </p>
            </th>

            <th class="table_header_heading" @click="sortByStock">
                <p>
                    Stock
                    <span class="material-symbols-outlined">
                        sort
                    </span>
                </p>
            </th>

        </tr>
        <TableRow />
    </table>
    <TablePagi />

</template>

<script setup>
import TablePagi from "./TablePagi.vue"

import TableRow from "./TableRow.vue";
import { useStore } from "vuex"
import { ref } from "vue";

const store = useStore()
const searchtext = ref('')

const props = defineProps({
    users: Array
});

store.commit('setNewDb', store.state.usersdb)

const filterdata = () => {
    store.commit('setPaginationNum', 1)
    store.commit('setNewDb', store.state.usersdb)
    let filteredData = () => {
        if (searchtext.value == '') {
            return store.state.usersdb
        } else {
            return store.state.usersdb.filter(user => user.name.includes(searchtext.value))
        }
    }
    let db = filteredData()
    store.commit('setNewDb', db)
}


const sortByName = () => {
    store.commit('setNewDb', store.state.searchFilterDB.sort((a, b) => a.name.localeCompare(b.name)))
}

const sortByBrand = () => {
    store.commit('setNewDb', store.state.searchFilterDB.sort((a, b) => a.brand.localeCompare(b.brand)))
}

const sortByArtnumber = () => {
    store.commit('setNewDb', store.state.searchFilterDB.sort((a, b) => a.artnumber - b.artnumber))
}

const sortByWeight = () => {
    store.commit('setNewDb', store.state.searchFilterDB.sort((a, b) => a.weight - b.weight))
}

const sortByQuantaty = () => {
    store.commit('setNewDb', store.state.searchFilterDB.sort((a, b) => a.quantaty - b.quantaty))
}

const sortByPrice= () => {
    store.commit('setNewDb', store.state.searchFilterDB.sort((a, b) => a.price - b.price))
}

const sortByStock = () => {
    store.commit('setNewDb', store.state.searchFilterDB.sort((a, b) => a.stock - b.stock))
}


</script>

<style>
/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,1,200" /> */
.table_header {
    width: 100%;
}

.table_header_heading {
    font-weight: bold;
}

.table_header_heading p{
    display: flex;
    justify-content: center;
    align-items: center;
}

.material-symbols-outlined{
    margin-left: 10px;
}
</style>