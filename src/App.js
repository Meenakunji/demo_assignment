import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  const [list1, setList1] = useState(["firstItem 1", "firstItem 2", "firstItem 3", "firstItem4"]);
  const [list2, setList2] = useState(["secondlistitem1", "secondlistitem2", "secondlistitem3", "secondlistitem4"]);
  

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const handleMoveToSecondList = (index) => {
    const itemToMove = list1[index];
    const updatedList1 = [...list1];
    updatedList1.splice(index, 1);

    setList1(updatedList1);
    setList2([...list2, itemToMove]);
  };

  const handleMoveToFirstList = (index) => {
    const itemToMove = list2[index];
    const updatedList2 = [...list2];
    updatedList2.splice(index, 1);

    setList2(updatedList2);
    setList1([...list1, itemToMove]);
  };

  return (
    <div>
      <div>
        <h3>List 1</h3>
        <ul>
          {list1.map((item, index) => (
            <li key={index}>
              <p style={{cursor:'pointer'}} onClick={()=>setIndex1(index)}>{item} </p>
              
            </li>
          ))}
        </ul>
        <button onClick={() => handleMoveToSecondList(index1)}>Move to List 2</button>
      </div>
      <div>
        <h3>List 2</h3>
        <ul>
          {list2.map((item, index) => (
            <li key={index}>
               <p style={{cursor:'pointer'}} onClick={()=>{setIndex2(index)}} >{item}</p>
              
            </li>
          ))}
        </ul>
        <button onClick={() => handleMoveToFirstList(index2)}>Move to List 1</button>
      </div>
    </div>
  
  );
}

export default App;
