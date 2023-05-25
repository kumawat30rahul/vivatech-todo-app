import React, { useContext } from 'react'
import TaskEditor from '../TaskEditor'
import { StateContext } from '../../StateContext'
import TaskCard from '../TaskCard'
import './styles.css'

function Home() {
    const { allTaskList, setAllTaskList } = useContext(StateContext)

    return (
        <div className='home-wrapper'>
        <span className='heading'>TODO Web App</span>
            <TaskEditor />
            <div className='home-task-list'>
                {allTaskList && allTaskList.map((task,index) => (
                    <TaskCard
                        key={task.id}
                        id={task.id}
                        title={task.taskTitle}
                        desc={task.taskDescription}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
