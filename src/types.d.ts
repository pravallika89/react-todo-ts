type Todo = {
  text: string;
  completed: boolean;
  alert: boolean;
};

type AddTodo = (newTodo: string) => void;

type UpdateTodo = (selectedTodo:Todo) => void;



// types and interfaces allow us to define what something is 
// supposed to look like. The shape of something

// types and interfaces defined in this file can be 
// referenced globally in our app.


// type User = {
//   firstName: string;
//   lastName:string;
//   email: string;
//   userName: string;
//   password: string;
// }

// let users: User[] = [{
//   firstName: "Alex",
//   lastName:"gutierrez",
//   email: 'email',
//   userName:'user',
//   password: 'abc123'
// }]