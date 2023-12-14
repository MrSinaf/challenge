import {useReducer} from 'react';
import './App.css'
import ListUniqueNumber from "./components/listUniqueNumber.jsx";
import ListPairNumber from "./components/listPairNumber.jsx";
import ListReducer, {initialState} from "./utils/listReducer.jsx";

function App() {
    const [state, dispatch] = useReducer(ListReducer, initialState);

    return (
        <>
            <ListUniqueNumber limit={10} state={state} dispatch={dispatch}/>
            <ListPairNumber state={state} dispatch={dispatch}/>
        </>
    )
}

export default App