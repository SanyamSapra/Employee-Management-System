// // import React from 'react'
// // import AcceptTask from './AcceptTask'
// // import NewTask from './NewTask'
// // import CompleteTask from './CompleteTask'
// // import FailedTask from './FailedTask'

// // const TaskList = ({ data }) => {
// //     return (
// //         <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
// //             {data.tasks.map((elem, idx) => {
// //                 if (elem.active) {
// //                     return <AcceptTask key={idx} data={elem} />
// //                 }
// //                 if (elem.newTask) {
// //                     return <NewTask key={idx} data={elem} />
// //                 }
// //                 if (elem.completed) {
// //                     return <CompleteTask key={idx} data={elem} />
// //                 }
// //                 if (elem.failed) {
// //                     return <FailedTask key={idx} data={elem} />
// //                 }

// //             })}
// //         </div>
// //     )
// // }

// // export default TaskList

// import React from 'react';
// import AcceptTask from './AcceptTask';
// import NewTask from './NewTask';
// import CompleteTask from './CompleteTask';
// import FailedTask from './FailedTask';

// const TaskList = ({ data }) => {
//     return (
//         <div
//             id='tasklist'
//             className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'
//         >
//             {data.tasks.map((task, idx) => {
//                 // Render components based on priority: active > newTask > completed > failed
//                 if (task.active) {
//                     return <AcceptTask key={`${task.title}-${task.date}`} data={task} />;
//                 } 
//                 else if (task.newTask) {
//                     return <NewTask key={`${task.title}-${task.date}`} data={task} />;
//                 } 
//                 else if (task.completed) {
//                     return <CompleteTask key={`${task.title}-${task.date}`} data={task} />;
//                 } 
//                 else if (task.failed) {
//                     return <FailedTask key={`${task.title}-${task.date}`} data={task} />;
//                 } 
//                 else {
//                     return null;
//                 }
//             })}
//         </div>
//     );
// };

// export default TaskList;

import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}
        </div>
    )
}

export default TaskList