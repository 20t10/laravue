<template>
<div>
    <div class="container">
        <h2>Add User</h2>
        <form action="/users">
            <div class="form-group">
            <label>Name: </label>
            <input type="text" class="form-control" v-model="name">
            </div>
            <div class="form-group">
            <label>LastName: </label>
            <input type="text" class="form-control" v-model="lastname">
            </div>
            <button class="btn btn-outline-primary btn-sm pt-2" v-on:click="addUser()">Add</button>
        </form>

    </div>
</div>
</template>

<script>
    export default {
        data(){
            return {
                name: '',
                lastname: ''

            }
        },
        methods: {
            addUser(){
                axios.post('/api/users', {
                    name: this.name,
                    lastname: this.lastname

                });
                console.log(this.name);
                console.log(this.lastname);
            }
        }

    }
</script>

<style scoped>

</style>
