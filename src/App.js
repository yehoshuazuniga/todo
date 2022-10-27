


import React, { Component } from 'react';
import { TodoBanner } from './ToDoBaner';
import { TodoCreator } from './TodoCreator';
import { TodoRow } from './ToDoRow';
/*
import { TodoBanner } from './TodoBanner';
import { TodoCreator } from './TodoCreator';
import { TodoRow } from './TodoRow';
*/
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Adam",
            todoItems: [{ action: "Buy Flowers", done: false },
            { action: "Get Shoes", done: false },
            { action: "Collect Tickets", done: true },
            { action: "Call Joe", done: false }]
        }
    }

    createNewTodo = (task) => {
        if (!this.state.todoItems.find(items => items.action === task)) {
            this.setState({
                todoItems: [...this.state.todoItems, { action: task, done: false }]
            });
        }
    }

    toggleTodo = (todo) => this.setState({
        todoItems: this.state.todoItems.
            map(item => item.action === todo.action ? { ...item, done: !item.done } : item)
    });

    todoTableRows = () => this.state.todoItems.map(item =>
        <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
    )

    render() {
        return (
            <div className="text-center">
                <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
                <div className="container-fluid">
                    <TodoCreator callback={this.createNewTodo} />
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr><th>Description</th><th>Done</th></tr>
                    </thead>
                    <tbody>{this.todoTableRows()}</tbody>
                </table>

            </div>
        )
    }
}


//import React, { Component } from 'react';
//import { TodoBanner } from './ToDoBaner';
//import { TodoCreator } from './TodoCreator';
//import { TodoRow } from './ToDoRow';

//export default class App extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            userName: "Adam",
//            todoItems: [{ action: "Buy Flowers", done: false },
//            { action: "Get Shoes", done: false },
//            { action: "Collect Tickets", done: true },
//            { action: "Call Joe", done: false }]
//        }
//    }

//    createNewTodo = (task) => {
//        if (!this.state.todoItems.find(items => items.action === task)) {
//            this.setState({
//                todoItems: [...this.state.todoItems, { action: task, done: false }]
//            }, () => localStorage.setItem("todos", JSON.stringify(this.state)));
//        }
//    }

//    toggleTodo = (todo) => this.setState({
//        todoItems: this.state.todoItems.
//            map(item => item.action === todo.action ? { ...item, done: !item.done } : item)
//    });

//    todoTableRows = (doneValue) => this.state.toDoItems.filter(item => item.done === doneValue).map(item =>
//        <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
//    )

//    componentDidMount = () => {
//        let data = localStorage.getItem('todos');
//        this.setState(data != null ? JSON.parse(data):
//        {
//            userName: 'Yo',
//                todoItems: [
//                { action: "Buy Flowers", done: false },
//                { action: "Get Shoes", done: false },
//                { action: "Collect Tickets", done: true },
//                { action: "Call Joe", done: false }],
//                    showComplete:true

//        })
//    }



//    render() {
//        return (
//            <div className="text-center">
//                <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
//                <div className="container-fluid">
//                    <TodoCreator callback={this.createNewTodo} />
//                </div>
//                <table className="table table-striped table-bordered">
//                    <thead>
//                        <tr><th>Description</th><th>Done</th></tr>
//                    </thead>
//                    <tbody>{this.todoTableRows()}</tbody>
//                </table>

//            </div>
//        )
//    }
//}





//import React, { Component } from 'react';
//import { ToDoBanner } from './ToDoBaner';
//import { ToDoCreator } from './TodoCreator';
//import { ToDoRow } from './ToDoRow';

//export default class App extends Component {

//    constructor(props) {
//        super(props);
//        this.state ={
//            userName: "Yo",
//            toDoItems: [{ action: "Buy fowers", done: false },
//                { action: "Get shoes", done: false },
//                { action: "Collect tickets", done: true },
//                { action: "Call Joe", done: false }

//            ],
//            newItemText:""
//        }
//    }


//    createNewToDo = (e) => {
//        if (!this.state.toDoItems.find(items => items.action === this.state.newItemText)) {
//            this.setState({
//                toDoItems: [...this.state.toDoItems, { action: this.state.newItemText, done: false }],
//                newItemText:""
//            });
//        }
//    }

//    updateNewTextvalue = (event) =>{
//        this.setState({ newItemText: event.target.value });
//    }

//    createNewToDo = (task) => {

//        this.props.callback(this.state.newItemsText);
//        this.setState({ newItemsText: '' });

//    }

//    toggleToDo = (todo) => this.setState({
//        toDoItems: this.state.toDoItems.
//            map(item => item.action === todo.action ? {...item, done: !item.done } : item)
//    })

//    todoTableRows = () => this.state.toDoItems.
//        map(item => <ToDoRow key={item.action} item={item} callback={this.toggleToDo} />)

//    render() {
//        return (
//            <div className="text-center">
//                <ToDoBanner name={this.state.userName} task={this.state.toDoItems} />
//                <div className="container-fluid">
//                    <ToDoCreator callback={this.createNewToDo} />
//                    <button className="form-control btn btn-primary bt-1" onClick={this.createNewToDo}>
//                        Fill it
//                    </button>
//                </div>
//                <table className="table table-striped table-bordered">
//                    <thead>
//                        <tr >
//                            <th>Description</th>
//                            <th>Done</th>
//                        </tr>
//                    </thead>

//                        <tbody>
//                            {this.todoTableRows()}
//                        </tbody>
//                </table>
//            </div>
//            )
//    }
//}










//import React, { Component } from 'react';

//export default class App extends Component {

//    constructor(props) {
//        super(props);
//        this.state = {
//            userName: "Yo",
//            toDoItems: [{ action: "Buy fowers", done: false },
//            { action: "Get shoes", done: false },
//            { action: "Collect tickets", done: true },
//            { action: "Call Joe", done: false }

//            ],
//            newItemText: ""
//        }
//    }


//    createNewToDo = (e) => {
//        if (!this.state.toDoItems.find(items => items.action === this.state.newItemText)) {
//            this.setState({
//                toDoItems: [...this.state.toDoItems, { action: this.state.newItemText, done: false }],
//                newItemText: ""
//            });
//        }
//    }

//    updateNewTextvalue = (event) => {
//        this.setState({ newItemText: event.target.value });
//    }


//    toggleToDo = (todo) => this.setState({
//        toDoItems: this.state.toDoItems.
//            map(item => item.action === todo.action ? { ...item, done: !item.done } : item)
//    })

//    todoTableRows = () => this.state.toDoItems.
//        map(item =>
//            <tr  >
//                <td>
//                    {item.action}
//                </td>

//                <td>
//                    <input type="checkbox" checked={item.done} onChange={() => this.toggleToDo(item)} />
//                </td>
//            </tr>
//        )

//    render() {
//        return (
//            <div className="text-center">
//                {/*<h4 className="bg-primary text-center text-white p-2">*/}
//                {/*    {this.state.userName}'s To do list, */}
//                {/*    ({this.state.toDoItems.filter(t => !t.done).length}) Items to do*/}
//                {/*</h4>*/}
//                <div className="container-fluid">
//                    <div className="my-1">
//                        <input className="form-control"
//                            value={this.state.newItemText}
//                            onChange={this.updateNewTextvalue} />

//                    </div>
//                    <button className="form-control btn btn-primary bt-1" onClick={this.createNewToDo}>
//                        Fill it
//                    </button>
//                </div>
//                {/*<button className="btn btn-primary m-2"*/}
//                {/*    onClick={this.changeStadeData}>*/}
//                {/*    Change*/}
//                {/*</button>*/}
//                <table className="table table-striped table-bordered">
//                    <thead>
//                        <tr >
//                            <th>Description</th>
//                            <th>Done</th>
//                        </tr>
//                    </thead>

//                    <tbody>
//                        {this.todoTableRows()}
//                    </tbody>
//                </table>
//            </div>
//        )
//    }
//}