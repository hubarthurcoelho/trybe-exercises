const Redux = require('redux');

// criamos o estado do redux;
// criamos a função reducer;
// criamos a ação através de uma função;
// despachamos a ação para o store;

const ESTADO_INICIAL = {
  login: false,
  email: '',
};

const login = (email) => (
  {
    type: 'login',
    email,
  }
);

const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case 'login':
      return {
        ...state,
        login: true,
        email: action.email,
      }
    default: return state;
  }
};


const store = Redux.createStore(reducer);

console.log(store.getState());

store.dispatch(login('arthurcoelho7885@gmail.com'));

console.log(store.getState());

// notas de aula:

// const fazerLogin = (email) => ({
//   type: "LOGIN",
//   email});

// const ESTADO_INICIAL = {
//   login: false,
//   email: "",
// };

// const reducer = (state = ESTADO_INICIAL, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         ...state,
//         login: !state.login,
//         email: action.email,
//       };
//     default: // No switch, sempre precisamos ter um caso default!
//       return state;
//   }
// };

// const store = Redux.createStore(reducer);

// store.dispatch(fazerLogin("alguem@email.com"));

// console.log(store.getState());

// { login: true, email: 'alguem@email.com' }
