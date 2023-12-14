import {useEffect, useState} from "react";

function ListUniqueNumber({limit, numbers, setNumbers}){
    const [canAddNumber, setCanAddNumber] = useState(true);
    useEffect(() => setCanAddNumber(numbers.length < limit), [numbers])

    const addUniqueNumber = () => {
        let rand;
        do {
            rand = Math.floor(Math.random() * 50);
        }
        while (numbers.includes(rand))

        setNumbers([...numbers, rand]);
    }

    return (
        <div id={'listNumber'}>
            <button onClick={() => addUniqueNumber()} disabled={!canAddNumber}>Ajouter un nombre unique</button>
            <p>{numbers.join(' | ')}</p>
            {numbers.length === limit && <p id={'errorLimite'}>Limite atteinte.</p>}
        </div>
    )
}

export default ListUniqueNumber;