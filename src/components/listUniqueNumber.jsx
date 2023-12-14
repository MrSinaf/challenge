import {useEffect, useState} from "react";

function ListUniqueNumber({limit, state, dispatch}) {
    const [canAddNumber, setCanAddNumber] = useState(true);
    useEffect(() => setCanAddNumber(state.numbers.length < limit), [state.numbers])

    return (
        <div id={'listNumber'}>
            <button onClick={() => dispatch({type: 'AddUniqueNumber'})} disabled={!canAddNumber}>
                Ajouter un nombre unique
            </button>
            <p>{state.numbers.join(' | ')}</p>
            {state.numbers.length === limit && <p id={'errorLimite'}>Limite atteinte.</p>}
        </div>
    )
}

export default ListUniqueNumber;