import React, {Component} from "react";
import './todo-list-item.css';
import './todo-list-item-label.css';

export default class TodoListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            important: false
        }
        this.onLabelClick =() => {
            this.setState({
                done: true
            })
        }
        this.onMarkImportant =() =>{
            this.setState({
                important: true
            })
        }
    }

    render(){
        const {label} = this.props;
        const {done, important} = this.state;
        let classNames = 'todo-list-item';
        if(done){
            classNames += ' done';
        }
        if(important){
            classNames += ' important';
        }
        return (
            <span className={classNames}>
                        <span
                            className='todo-list-item-label'
                            onClick={this.onLabelClick}>
                                {label}
                        </span>
                        <button
                            type='button'
                            className='btn btn-outline-success btn-sm'
                            onClick={this.onMarkImportant}>
                            <i className='fa fa-exclamation'/>
                        </button>
                        <button
                            type='button'
                            className='btn btn-outline-success btn-sm'>
                            <i className="far fa-trash-alt"/>
                        </button>
                    </span>

        );
    }
}