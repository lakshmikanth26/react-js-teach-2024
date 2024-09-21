import { useState } from "react";
import "./index.css";
// EXAMPLE 1

// function ListGroup() {
//     return (
//         <ul className="list-group">
//             <li className="list-group-item active" aria-current="true">An active item</li>
//             <li className="list-group-item">A second item</li>
//             <li className="list-group-item">A third item</li>
//             <li className="list-group-item">A fourth item</li>
//             <li className="list-group-item">And a fifth one</li>
//         </ul>
//     );
// }

//EXAMPLE 2 Fragment

// function ListGroup() {
//     return (
//         <>
//             <h1>Movies List</h1>
//             <ul className="list-group">
//                 <li className="list-group-item active" aria-current="true">An active item</li>
//                 <li className="list-group-item">A second item</li>
//                 <li className="list-group-item">A third item</li>
//                 <li className="list-group-item">A fourth item</li>
//                 <li className="list-group-item">And a fifth one</li>
//             </ul>
//         </>
//     );
// }

// EXAMPLE 3 Conditional Rendering
// function ListGroup() {
//     const items = [];
//     if(items.length==0)
//         return (
//             <>
//                 <h1>List Groups</h1>
//                 <p className="list-group">
//                     No Items Found
//                 </p>
//             </>
//         );

// }    

//EXAMPLE 4 Loops and even handling
function ListGroup() {
    // local Variable
    // let selectedIndex = 0;

    //Hook
    const [selectedIndex, setSelectedIndex] = useState(0)
    // const [name, setName] = useState('')

    const items = [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
    ];
    return (
        <>
        <h1>List Groups</h1>
        <ul className="list-group">
            {items.map((item, index) => (
            <li
                key={item}
                className={
                selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                // onClick={() => {selectedIndex = index}}
                onClick={() => {setSelectedIndex(index) 
                                // console.log(selectedIndex)
                            }}
            >
                {item}
            </li>
            ))}
        </ul>
        </>
    );
}
export default ListGroup;
