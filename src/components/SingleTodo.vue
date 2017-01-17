<template>
    <div id="app">
        <h1>{{todo.task}}</h1>
        <ul>
            <li>
                id: {{todo.readableId}}
            </li>
            <li>
                due date: {{todo.dueDate}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'singleTodo',
        data() {
            return {
                todo: ''
            }
        },
        methods: {
            fetchTodos: function (event) {
                this.$http.get('http://localhost:5000/api/todos/' + this.$route.params.todoId)
                    .then(function (response) {
                        this.todo = response.body;
                    });
            }
        },
        created: function () {
            this.fetchTodos();
        }
    }
</script>

<style scoped>
h1, h2 {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /*display: inline-block;*/
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>