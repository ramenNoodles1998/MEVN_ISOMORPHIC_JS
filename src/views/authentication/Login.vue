<template>
    <div>
        <h1>Login Route</h1>
        <form  @submit="onSubmit($event)">
            <div class="form-group custom-form">
                <label for="username">Username</label>
                <input v-model="username" type="text" class="form-control" id="username" placeholder="Enter username.">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter password.">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Login</button>
            </div>
        </form>
    </div>
</template>
<script>
    import * as auth from '../../services/AuthService'

    export default {
        name: 'login',

        data: () => {
            return {
                username: '',
                password: ''
            }
        },

        methods: {
            async onSubmit(event) {
                event.preventDefault()

                const user = {
                    username: this.username,
                    password: this.password
                }

                await auth.login(user)
                this.$router.push({name: 'home'})
            }
        }
    }
</script>