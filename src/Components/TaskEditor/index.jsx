import React, { useContext, useEffect, useState } from 'react'
import './styles.css'
import { StateContext } from '../../StateContext'
import ExportExcel from '../ExcelFunctionality/excelexport'
import Download from '../ExcelFunctionality/excelexport'


function TaskEditor() {
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

    const {
        allTaskList,
        setAllTaskList,
    } = useContext(StateContext)

    // const handleExport = () => {
    // };

    const addingTaskHandler = () => {
        if (taskTitle !== '' || taskDescription !== '') {
            let taskDetails = {
                id: Date.now(),
                date: new Date().toLocaleDateString(),
                taskTitle: taskTitle,
                taskDescription: taskDescription,
                list: 'list-1'
            }
            setAllTaskList([...allTaskList, taskDetails])
            setTaskTitle('')
            setTaskDescription('')
        } else {
            alert("Please fill the required fields")
        }
    }

    useEffect(() => { console.log(allTaskList); }, [allTaskList])

    return (
        <div className='task-editor-wrapper'>
            <div className='task-editor-input-div'>
                <label htmlFor='task'>Task</label>
                <br />
                <input
                    type='text'
                    name='task'
                    className='task-editor-input input-task'
                    placeholder='Task Title..'
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
                <br />
                <label htmlFor='desc'> Task Description</label>
                <br />
                <textarea
                    type='text'
                    name='desc'
                    className='task-editor-input input-desc'
                    rows="4"
                    cols="50"
                    placeholder='Description..'
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
                <br />
            </div>
            <div className='task-editor-button-div'>
                <button
                    className='btn add'
                    onClick={addingTaskHandler}
                >
                    Add
                </button>
                <Download />
            </div>
        </div>
    )
}

export default TaskEditor
