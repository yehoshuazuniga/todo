import React, { Component } from 'react';

export class TodoCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { newItemText: "" }
    }

    updateNewTextValue = (event) => {
        this.setState({ newItemText: event.target.value });
    }

    createNewTodo = () => {
        this.props.callback(this.state.newItemText);
        this.setState({ newItemText: "" });
    }

    render = () =>
        <div className="my-1">
            <input className="form-control"
                value={this.state.newItemText}
                onChange={this.updateNewTextValue} />
            <button className="btn btn-primary mt-1"
                onClick={this.createNewTodo}>
                Add
            </button>
        </div>
}





//export class TodoCreator extends Component {
//    constructor(props) {
//        super(props);
//        this.state = { newItemText: "" }
//    }

//    updateNewTextValue = (event) => {
//        this.setState({ newItemText: event.target.value });
//    }

//    createNewTodo = () => {
//        this.props.callback(this.state.newItemText);
//        this.setState({ newItemText: "" });
//    }

//    render = () =>
//        <div className="my-1">
//            <input className="form-control"
//                value={this.state.newItemText}
//                onChange={this.updateNewTextValue} />
//            <button className="btn btn-primary mt-1"
//                onClick={this.createNewTodo}>
//                Add
//            </button>
//        </div>
//}




//import React, { Component } from 'react';



//export class ToDoCreator extends Component {
//    constructor(props) {
//        super(props);
//        this.state = { newItemText: "" }
//    }



//    updateNewTextValue = (event) => {
//        this.setState({ newItemText: event.target.value });
//    }



//    createNewTodo = () => {
//        this.props.callback(this.state.newItemText);
//        this.setState({ newItemText: "" });
//    }



//    render = () =>
//        <div className="my-1">
//            <input className="form-control"
//                value={this.state.newItemText}
//                onChange={this.updateNewTextValue} />
//            <button className="btn btn-primary mt-1"
//                onClick={this.createNewTodo}>
//                Add
//            </button>
//        </div>
//}



//import React, { Component } from 'react';

//export class ToDoCreator extends Component {
//    constructor(props) {
//        super(props)
//        this.state = {newItemsText:''}
//    }

//    updateNewTextvalue = (event) => {
//        this.setState({ newItemText: event.target.value });
//    }

//    createNewToDo = (e) => {

//        this.pops.callback(this.state.newItemsText);
//        this.setState({ newItemsText: '' });

//    //    if (!this.state.toDoItems.find(items => items.action === this.state.newItemText)) {
//    //        this.setState({
//    //            toDoItems: [...this.state.toDoItems, { action: this.state.newItemText, done: false }],
//    //            newItemText: ""
//    //        });
//    //    }
//    }

//    render = () =>{
//        <div className="text-center">
           
//                <div className="my-1">
//                    <input className="form-control"
//                        value={this.state.newItemText}
//                        onChange={this.updateNewTextvalue} />

//                </div>
//                <button className="form-control btn btn-primary bt-1" onClick={this.createNewToDo}>
//                    Fill it
//                </button>
//            </div>
//    }
//}