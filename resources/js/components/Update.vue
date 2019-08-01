<template>
    <div>
        <div class="container">

            <h2>Edit User</h2>
            <form >
                <div class="form-group">
                    <label>Name: </label>
                    <input type="text" class="form-control" v-model="name">
                </div>
                <div class="form-group">
                    <label>LastName: </label>
                    <input type="text" class="form-control" v-model="lastname">
                </div>
                <button class="btn btn-outline-primary btn-sm pt-2" v-on:click="editUser()">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        props:['id'],
        data(){
            return {
                name: '',
                lastname: ''
            }
        },
        mounted(){
            axios.get('/api/users/'+this.id).then(response=>{
                let user = response.data;
                this.name = user.name;
                this.lastname = user.lastname;

            });
        },
        methods:{
            editUser(){
                axios.put('/api/users/'+this.id, {
                    name: this.name,
                    lastname: this.lastname


                });
                console.log(this.name,  this.lastname);

            }
        }


    }
</script>

<style>

</style>
