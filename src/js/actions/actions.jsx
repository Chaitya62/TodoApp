import firebase, {firebaseRef, githubProvider} from '../firebase/index';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {type: 'SET_SEARCH_TEXT', searchText};
};

export var addTodo = (todo) => {
  return {type: 'ADD_TODO', todo}
};

export var addTodos = (todos) => {
  return {type: 'ADD_TODOS', todos};
}

export var toggleShowCompleted = () => {
  return {type: 'TOGGLE_SHOW_COMPLETED'};
};

export var updateTodo = (id, updates) => {

  return {type: 'UPDATE_TODO', id, updates};
}

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed
        ? moment().unix()
        : null
    };
    return todoRef
      .update(updates)
      .then(() => {
        dispatch(updateTodo(id, updates));
      });

  }
}

export var startAddTodo = (text) => {

  return (dispatch, getState) => {
    var todo = {

      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };

    var todoRef = firebaseRef
      .child('todos')
      .push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    })
  }
}

export var startAddTodos = () => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child('todos');
    var todos = [];
    return todoRef.once('value', function(snapshot) {
      var todo;
      snapshot.forEach(function(childSnapshot) {
        var data = childSnapshot.val() || {};
        todo = {
          ...data,
          id: childSnapshot.key
        }
        todos.push(todo);
      });
    }).then(() => {
      dispatch(addTodos(todos));
    }).catch((e) => {
      console.log('Error', e);
    });
  }
}

export var login = (uid) => {
  return {type: 'LOGIN', uid};
};

export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase
      .auth()
      .signInWithPopup(githubProvider)
      .then((result) => {
        console.log('Auth worked', result)
      })
      .catch((error) => {
        console.log('Unable to auth', error);
      });
  }
};

export var logout = () => {
  return {type: 'LOGOUT'}

}

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Logged Out');
      })
  }
};
