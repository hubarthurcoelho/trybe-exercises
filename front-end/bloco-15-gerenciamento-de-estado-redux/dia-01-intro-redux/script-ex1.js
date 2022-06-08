const INITIAL_STATE = {
  colors: ["white", "black", "red", "green", "blue", "yellow"],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "next":
      return {
        ...state,
        index: action.index,
      };
    case "previous":
      return {
        ...state,
        index: action.index,
      };
    case 'random':
      return {
        ...state,
        index: action.index,
      }
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");
const randomBtn = document.getElementById("random");
const colorSpan = document.getElementById("value");
const container = document.getElementById("container");

randomBtn.addEventListener('click', () => {
  const { colors } = store.getState();
  const randomIndex = Math.floor(Math.random() * colors.length);
  store.dispatch({ type: 'random', index: randomIndex })
})

nextBtn.addEventListener("click", () => {
  const { index, colors } = store.getState();
  if (index === colors.length - 1) {
    store.dispatch({ type: "next", index: 0 });
  } else {
    store.dispatch({ type: "next", index: index + 1 });
  }
});

previousBtn.addEventListener("click", () => {
  const { index, colors } = store.getState();
  if (index === 0) {
    store.dispatch({ type: "next", index: colors.length - 1 });
  } else {
    store.dispatch({ type: "next", index: index - 1 });
  }
});

store.subscribe(() => {
  const { colors, index } = store.getState();
  colorSpan.innerHTML = colors[index];
  container.style.backgroundColor = colors[index];
});
