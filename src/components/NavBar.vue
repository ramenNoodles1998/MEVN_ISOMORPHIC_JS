<template>
    <header>
        <ul class="nav custom-bg-dark">
            <li class="nav-item row p-3">
                <router-link to="/" class="navbar-brand">   
                    <img style="max-height:25px;" alt="Vue logo" src="../assets/logo.png">
                    <a class="nav-link active" href="#">TASK MANAGER</a>
                </router-link>
            </li>
            <li class="nav-item p-3">
               <router-link to="/" class="nav-link" exact>Home</router-link>
            </li>
            <li class="nav-item p-3">
                <router-link to="/tasks" class="nav-link" exact>Tasks</router-link>
            </li>
            <li class="nav-item p-3">
                <router-link to="/register" class="nav-link" exact>Register</router-link>
            </li>
            <li class="nav-item p-3">
                <router-link to="/login" class="nav-link" exact>Login</router-link>
            </li>
            <li class="nav-item p-3">
                <router-link to="/logout" class="nav-link">Logout</router-link>
            </li>
            <li class="nav-item p-3">
                <router-link to="/tasks" class="nav-link">{{ this.$store.state.username?this.$store.state.username:'User' }}</router-link>
            </li>
        </ul>
    </header>
</template>
