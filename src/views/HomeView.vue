<template>
  <div class="home">
    <div v-if="showTable">
      <h1>Loading...</h1>
    </div>
    <div v-else>
      <Table :users="userdb"/>
    </div>
  </div>
</template>

<script setup>
import Table from "../components/table/Table";
import axios from "axios";
import { computed, onMounted, reactive, ref } from 'vue';
import { useStore } from "vuex";

const store = useStore();

let showTable = ref(true)
let userdb = reactive([])

const connectDB = async () =>{
  const users = await axios.get('http://localhost:3000/users').then((response) =>{
    userdb = response.data;
    showTable.value = false
  });
}

const zaybal =  async () => {
  const foo = await store.dispatch('getUserDb');
}

zaybal()

connectDB()

console.log(userdb.length);
</script>
