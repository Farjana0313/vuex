<template>
    <div>
        <h1>todo</h1>
        <input type="text" name="" id="" v-model="bookName">
        <button @click="addBook">Add</button>
        <ul>
            <li v-for="(book,index) in $store.state.bookList" :key="index">
                {{ book }} <button>delete</button>
            </li> 
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Todo',

    data() {
        return {
            bookName:'',
        };
    },
    computed:{
        // bookList(){
        //     return this.$store.state.bookList
        // }
    },
    mounted() {
        
    },

    methods: {
        addBook(){
            this.$store.dispatch('addBook',this.bookName);
        }
    },
};
</script>
<style lang="" scoped>
    
</style>