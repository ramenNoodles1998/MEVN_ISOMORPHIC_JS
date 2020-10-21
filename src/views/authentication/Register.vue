<template>
    <div>
        <h1>Register Route</h1>
        <form  @submit="onSubmit($event)">
            <div class="form-group custom-form">
                <label for="firstname">First Name</label>
                <input v-model="firstname" type="text" class="form-control" id="firstname" placeholder="Enter first name.">
            </div>
            <div class="form-group custom-form">
                <label for="lastname">Last Name</label>
                <input v-model="lastname" type="text" class="form-control" id="lastname" placeholder="Enter last name.">
            </div>
            <div class="form-group custom-form">
                <label for="username">Username</label>
                <input v-model="username" type="text" class="form-control" id="username" placeholder="Enter username.">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter password.">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Register</button>
            </div>
        </form>
    </div>
</template>
<script>
    import * as auth from '../../services/AuthService'

    export default {
        name: 'register',
        data: ()=> {
            return {
                username: '',
                password: '',
                lastname: '',
                firstname: ''
            }
        },

        methods: {
            async onSubmit(event) {
                event.preventDefault()

                const user = {
                    username: this.username,
                    password: this.password,
                    firstname: this.firstname,
                    lastname: this.lastname
                }
                const registerPromise = auth.registerUser(user)
                const loginPromise = auth.login(user)
                await Promise.all([registerPromise, loginPromise])

                this.$router.push({ name: 'home' })
            }
        }
    }
</script>