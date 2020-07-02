import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Weather from '../containers/Weather';

const App = () => (
    <div>
        <Weather />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App