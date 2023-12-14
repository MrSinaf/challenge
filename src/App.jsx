import {useState} from 'react';
import './App.css'
import ListUniqueNumber from "./components/listUniqueNumber.jsx";
import ListPairNumber from "./components/listPairNumber.jsx";

function App() {
    const [numbers, setNumbers] = useState([]);

    return (
        <>
            <ListUniqueNumber limit={10} numbers={numbers} setNumbers={setNumbers}/>
            <ListPairNumber numbers={numbers}/>
        </>
    )
}

export default App