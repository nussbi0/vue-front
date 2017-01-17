<template>
    <div id="app">
        <div class="todos">
            <h1>{{ msg }}</h1>
            <ul>
                <li v-for="todo in todos">
                    <router-link :to="{ name: 'singleTodo', params: { todoId: todo.readableId }}">{{todo.task}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'todos',
        data() {
            return {
                msg: 'Here are your Todos!',
                todos: []
            }
        },
        methods: {
            fetchTodos: function (event) {
                this.$http.get('http://localhost:5000/api/todos')
                    .then(function (response) {
                        this.todos = response.body;
                    });
            }
        },
        created: function () {
            this.fetchTodos();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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