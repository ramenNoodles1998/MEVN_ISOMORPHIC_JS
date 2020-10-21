<template>
    <div>
        <h1>Create Task</h1>
        <form  @submit="onSubmit($event)">
            <div class="form-group custom-form">
                <label for="title">Title</label>
                <input v-model="task.title" type="text" class="form-control" id="title" name="title" 
                placeholder="Enter title.">
            </div>
            <div class="form-group">
                <label for="body">Body</label>
                <textarea class="form-control" placeholder="Body"
                v-model="task.body" name="body" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="form-group custom-form">
                <label for="due-date">Due Date</label>
                <input v-model="task.dueDate" name="due-date" type="date" class="form-control" id="due-date" 
                placeholder="Enter due date.">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Create</button>
            </div>
        </form>
    </div>
</template>
<script>
    import * as taskService from '../../services/TaskService'

    export default {
        name: 'tasks-create',

        data: () => {
            return {
                task: {
                    title: '',
                    body: '',
                    dueDate: ''
                }
            }
        },

        methods: {
            async onSubmit(event) {
                event.preventDefault()

                const request = {
                    task: this.task
                }

                await taskService.createTask(request)
                this.$router.push({name: 'tasks-all'})
            }
        }
    }
</script>