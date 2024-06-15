import {atom, selector} from 'recoil'

export const Todo = atom({
    key : "Todo",
    default : []
});
export const Filt = atom({
  key: "Filt",
  default: [],
});
export const Title = atom({
  key  : "Title",
  default : ""

})
export const Description = atom({
  key: "Description",
  default: "",
});

export const filterTodos = selector({
  key : "filterTodos",
  get :({get},filter)=>{
  
    const todos = get(Todo);
    todos.filter((todo)=>{
        if(filter in todo.title || filter in todo.description)
          return true  })

    return todos;
  }
})