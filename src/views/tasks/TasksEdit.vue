<template>
    <div>
        <h1>Edit Task</h1>
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
                <button type="submit" class="btn btn-secondary">Save Changes</button>
            </div>
        </form>
    </div>
</template>
<script>
    import * as taskService from '../../services/TaskService'
    import moment from 'moment'

    export default {
        name: 'task-edit',

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

                await taskService.updateTask(request)
                this.$router.push({name: 'tasks-all'})
            }
        },

        beforeRouteEnter(to, from, next) {
            console.log(to.params.id)
            taskService.getTaskById(to.params.id)
            .then(res => {
                console.log(res)
                if(!res) {
                    next('/tasks')
                } else {
                    next(vm => {
                        const task = res.data.task
                        task.dueDate = moment(task.dueDate).format('YYYY-MM-DD')
                        vm.task = task
                    })
                }
            })
        }
    }
</script>