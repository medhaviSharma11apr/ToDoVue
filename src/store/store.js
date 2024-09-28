import { createStore } from 'vuex';

export const store = createStore({
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    REMOVE_TODO(state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
    EDIT_TODO(state, payload) {
      const todo = state.todos.find((todo) => todo.id === payload.id);
      if (todo) {
        todo.text = payload.text; 
      }
    },
    MARK_COMPLETE(state, payload) {
      const todo = state.todos.find((todo) => todo.id === payload.id);
      if (todo) {
        console.log('qwe'+payload.completed)
        todo.completed = payload.completed; 
      }
    }
  },
  actions: {
    addTodo({ commit }, todoText) {
      const todo = { id: Date.now(), text: todoText, completed: false };
      commit('ADD_TODO', todo);
    },
    removeTodo({ commit }, todoId) {
      commit('REMOVE_TODO', todoId);
    },
    editTodo({ commit }, payload) {
       
        
      commit('EDIT_TODO', payload);
    },
    markComplete({ commit }, payload) {
      commit('MARK_COMPLETE', payload)
    }
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id);
    },
  },
});


