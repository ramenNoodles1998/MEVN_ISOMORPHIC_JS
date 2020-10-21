<template>
    <div class="d-flex flex-column">
        <div class="mb-4">
            <h1>Tasks</h1>
            <router-link to="/tasks/new" class="btn btn-success ml-2" exact>Create Task</router-link>
        </div>
        <div v-if="tasks && tasks.length > 0" class="d-flex flex-wrap justify-content-start">
            <div v-for="task in tasks" v-bind:key="task._id" class="card mb-2 ml-2 text-white bg-dark" style="width: 18rem;">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title">{{ task.title }}</h5>
                        <span v-bind:class="{ late: taskIsLate(task.dueDate) && !task.completed}" class="small">{{ task.dueDate | date }}</span>
                    </div>

                    <h6 class="card-subtitle mb-2 text-muted">Created by {{ task.author.username }}</h6>
                    <p class="card-text">{{ task.body }}</p>

                    <div v-if="task.author._id === $store.state.userId" class="form-group form-check">
                        <input type="checkbox" 
                            class="form-check-input" 
                            :disabled="task.completed" 
                            v-model="task.completed"
                            @click="markAsCompleted(task)"
                        >
                        <label for="form-check-label">Completed</label>
                    </div>

                    <div v-if="task.author._id === $store.state.userId" class="d-flex justify-content-between">
                        <router-link 
                            class="card-link btn btn-primary" 
                            :to="{name: 'task-edit', params: { id: task._id }}" 
                            exact
                        >Edit</router-link>
                        <a v-on:click.prevent="currentTaskId = task._id" class="card-link btn btn-danger" v-b-modal.modal1>Delete</a>
                    </div>
                    
                </div>
            </div>
            <div>
                <b-modal id="modal1" ref="modal" centered title="Delete Confirmation">
                        <p class="my-4">Are you sure you want to delete this task.</p>
                    <div slot="modal-footer" class="w-100 text-right">
                        <b-button class="mr-1" slot="md" variant="danger" block @click="deleteTask">Delete</b-button>
                        <b-button class="mr-1" slot="md" variant="secondary" block @click="cancelModal">Cancel</b-button>
                    </div>
                </b-modal>
            </div>
        </div>
        <div v-if="tasks && tasks.length === 0" class="ml-2">
            <div class="alert alert-info">No tasks found.</div>
        </div>
    </div>
</template>
<script>
    import * as taskService from '../../services/TaskService'
    import moment from 'moment'

    export default {
        name: 'tasks-all',

        data: () => {
            return {
                tasks: null,
                currentTask: null
            }
        },

        methods: {
            taskIsLate(date) {
                return moment(date).isBefore()
            },
            
            cancelModal() {
                this.$refs.modal.hide()
                this.currentTaskId = null
            },

            async deleteTask() {
                console.log(this.$refs)
                this.$refs.modal.hide()
                await taskService.deleteTask(this.currentTaskId)
                const index = this.tasks.findIndex(task => task._id === this.currentTaskId)
                this.tasks.splice(index, 1)
                this.currentTaskId = null
            },
            
            markAsCompleted(task) {
                task.completed = true
                const request = {
                    task: task
                }

                taskService.updateTask(request)
            }
        },

        beforeRouteEnter(to, from, next) {
            taskService.getAllTasks()
            .then(res => {
                next(vm => {
                    vm.tasks = res.data.tasks
                })
            })
        }
    }
</script>