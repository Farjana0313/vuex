<template>
    <div>
        <h1>todo</h1>
        <h2>Total Book : {{totalBook}} </h2>
        <!-- <h2>Total Book : {{$store.getters.totalBook}} </h2> -->
        <input type="text" name="" id="" v-model="bookName"> &nbsp;
        <button @click="addBook(bookName)">Add</button>
        <ul>
            <li v-for="(book,index) in $store.state.bookList" :key="index">
                {{ book }} &nbsp; &nbsp; <button @click="removeBook(index)">Delete</button>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
    export default {
        name: 'Todo',

        data() {
            return {
                bookName: '',
            };
        },
        computed: {
            ...mapState({
                bookList:"bookList"
            }),
            ...mapGetters({
                totalBook:"totalBook"
            })
            // bookList(){
            //     return this.$store.state.bookList
            // }
        },
        mounted() {

        },

        methods: {
            // addBook() {
            //     this.$store.dispatch('addBook', this.bookName);
            // },
            // State ar action k dhorar jonno dispatch use korte hoi. r mutations k dhorar jonno commit
            ...mapActions({
                removeBook:"removeBook",
                addBook:"addBook"
            })
            // removeBook(index) {
            //     this.$store.dispatch("removeBook", index)
            //     // this.$store.commit("removeBook",index)
            // }
        },
    };
</script>
<style lang="" scoped>

</style>