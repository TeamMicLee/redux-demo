import React, { Component } from 'react';
import PropTpes from 'prop-types';
import Todo from './Todo.js';

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo} key={index} onClick={() => this.props.onTodoClick(index)} />
                )}
            </ul>
        );
    }
}

TodoList.propTypes = {
    onTodoClick: PropTpes.func.isRequired,
    todos: PropTpes.arrayOf(PropTpes.shape({
        text: PropTpes.string.isRequired,
        completed: PropTpes.bool.isRequired
    }).isRequired).isRequired
};