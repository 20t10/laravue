<template>
    <div>
        <div class="container">
            <h1 class="text-center mt-2">Users List</h1>
            <span class="float-right">
            <a href="/users/create" class="btn btn-outline-success btn-sm mb-2 ">Add User</a>
            </span>
            <table class="table table-bordered">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Edit</th>
                    <th>Del</th>
                </tr>
                <tr v-for="(user, index) in users">
                    <td> {{user.id }}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.lastname}}</td>
                    <td><a :href=" '/users/'+user.id+'/edit' " class="btn btn-warning btn-sm">Edit</a></td>
                    <td><a href="javascript:;" class="btn btn-danger btn-sm" v-on:click="deleteUser(user.id, index)">del</a></td>
                </tr>
            </table>

        </div>


    </div>
</template>

<script>
    export default {
        mounted() {
            this.getUsers();
        },
        methods:{
            getUsers(){
                axios.get('api/users').then(response=>{
                    this.users=response.data;
                });


            },
            deleteUser(id, index){
                console.log(id);
                axios.delete('api/users/'+id).then(response=>{
                    this.users.splice(index, 1);
                    console.log(response.data);
                });

            }
        },
        data(){
            return {
                users:[],
                users:{
                    id: 0,
                    name: '',
                    lastname: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>
