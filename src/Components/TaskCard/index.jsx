import React, { useContext, useEffect, useState } from 'react'
import './styles.css'
import { StateContext } from '../../StateContext'

function TaskCard({ title, desc, id }) {
    const [edittedTaskTitle, setEddittedTaskTitle] = useState("")
    const [edittedTaskDesc, setEddittedTaskDesc] = useState("")
    const [listValue, setListValue] = useState('list-1');
    const [isEdit, setEdit] = useState(false)

    const {
        allTaskList,
        setAllTaskList,
    } = useContext(StateContext)


    const editHandler = () => {
        setEdit(!isEdit)
        setEddittedTaskTitle(title);
        setEddittedTaskDesc(desc);
    }

    const saveHandler = () => {
        const updatedTaskList = allTaskList.map((task) => {
            if (task.id === id) {
                return {
                    id: task.id,
                    taskTitle: edittedTaskTitle,
                    taskDescription: edittedTaskDesc,
                }
            } else {
                return {
                    ...task
                }
            }
        })
        setAllTaskList(updatedTaskList)
        setEdit(false);
    }

    const deleteHandler = () => {
        if(listValue === 'list_1'){
            const updatedList1 = list1.filter((task) => task.id !== id)
            setList1(updatedList1)
        }else if(listValue === 'list_2'){
            const updatedList2 = list2.filter((task) => task.id !== id)
            setList2(updatedList2)
        }else if(listValue === 'list_3'){
            const updatedList3 = list3.filter((task) => task.id !== id)
            setList3(updatedList3)
        }
        const updatedList = allTaskList.filter((task) => task.id !== id)
        setAllTaskList(updatedList)
    }

    useEffect(() => {
        console.log("allTaskList", allTaskList);
        // console.log(listValue);
    }, [allTaskList])

    const listHandler = (e) => {
        const updatedList = allTaskList.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              list: e.target.value
            };
          }
          return task;
        });
      
        setAllTaskList(updatedList);
        setListValue(e.target.value);
      };
      
      
      

    return (
        <div className={`task-card-wrapper ${
            listValue === "list-1" ? 'list-1' : 
            listValue === 'list-2' ? 'list-2' :
            listValue === 'list-3' ? 'list-3' : ''
        }`}>
            <div className='task-card-info'>
                {isEdit
                    ?
                    <>
                        <input
                            type='text'
                            name='task'
                            className='task-editor-input input-task'
                            placeholder='Task Title..'
                            value={edittedTaskTitle}
                            onChange={(e) => setEddittedTaskTitle(e.target.value)}
                        />
                        <input
                            type='text'
                            name='desc'
                            className='task-editor-input input-desc task-card-desc'
                            placeholder='Description..'
                            value={edittedTaskDesc}
                            onChange={(e) => setEddittedTaskDesc(e.target.value)}
                        />
                    </>
                    :
                    <>
                        <h2 className='task-card-info-title'>{title}</h2>
                        <span className='task-card-info-desc'>{desc}</span>
                    </>
                }
            </div>
            <div className='task-card-buttons-div'>
                {isEdit
                    ?
                    <button
                        className='card-btn edit'
                        onClick={saveHandler}
                    >
                        Save
                    </button>
                    :
                    <button
                        className='card-btn edit'
                        onClick={editHandler}
                    >
                        Edit
                    </button>
                }

                <button
                    className='card-btn delete'
                    onClick={deleteHandler}
                >
                    Delete
                </button>
                <select className='task-card-select' onChange={(e) => listHandler(e)}>
                    <option value="list-1">List 1</option>
                    <option value="list-2">List 2</option>
                    <option value="list-3">List 3</option>
                </select>
            </div>
        </div>
    )
}

export default TaskCard


// setListValue(e.target.value);
//         // const updatedList1 = list1.filter((task) => task.id !== id);
//         // const updatedList2 = list2.filter((task) => task.id !== id);
//         // const updatedList3 = list3.filter((task) => task.id !== id);
      
//         const currentTask1 = list1.find((task) => task.id === id);
//         const currentTask2 = list2.find((task) => task.id === id);
//         const currentTask3 = list3.find((task) => task.id === id);
      
//         if (e.target.value === "list_2") {
//             currentTask1 = {
//                 ...currentTask1,
//                 list: 'list_2'
//             }
//           setList1(updatedList1);
//           setList2([...list2, currentTask1 || currentTask3]);
//           setList3(updatedList3);
//         } else if (e.target.value === "list_3") {
//           setList1(updatedList1);
//           setList2(updatedList2);
//           setList3([...list3, currentTask1 || currentTask2]);
//         } else if (e.target.value === "list_1") {
//           setList1([...list1, currentTask2 || currentTask3]);
//           setList2(updatedList2);
//           setList3(updatedList3);
//         }