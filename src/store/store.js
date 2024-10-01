import { createStore } from 'vuex';

export const store = createStore({
  state: {
    todos: [],
    todayTodos: [],
    tomorrowTodos: [],
    futureTodos: [],
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
        
        todo.completed = payload.completed; 
      }
    }
  },
  actions: {
    addTodo({ commit }, newTodo) {
      const todo = { id: Date.now(), text: newTodo.inputText, isCompleted: false, toDoDate: newTodo.date,  };
     
      commit('ADD_TODO', todo);
      console.log("store"+todo.toDoDate);
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

    allTodosFilter(state) {
      return state.todos.sort((b, a) => {
        return new Date(b.toDoDate) - new Date(a.toDoDate);
      });
    },
    allTodos(state) {
      return state.todos;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id);
    },
    tommorrowTodo(state) {
      return state.tomorrowTodos;
    },
    futureTodo(state) {
      return state.futureTodos;
    },

// Get today's todos
    todayTodos(state) {
      state.todayTodos = [];
      state.tomorrowTodos= [];
      state.futureTodos=[];
      
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set time to start of the day
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1); // Add one day to today
      tomorrow.setHours(0, 0, 0, 0);    // Set time to start of the day
     
      return state.todos.filter(todo => {
        const todoDate =new Date(todo.toDoDate);
        todoDate.setHours(0, 0, 0, 0); // Set time to start of the day
        if (todoDate.getTime() === today.getTime()) {
           console.log("Store here")
          state.todayTodos.push(todo);
         
           return state.todayTodos;
        }
        else if (todoDate.getTime() === tomorrow.getTime()) {
          state.tomorrowTodos.push(todo);
          // return state.tomorrowTodos;
        } else if(todoDate.getTime() > tomorrow.getTime()) {
           state.futureTodos.push(todo);
          // return state.futureTodos;
        }
      
      });
    },


 

  },
});


