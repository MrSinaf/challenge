import {useState} from "react";

function ListPairNumber({numbers}) {
    const [pairs, setPairs] = useState([]);

    const generatePairs = () => {
        let pairList = [];
        for (let i = 0; i < numbers.length; i += 2) {
            if (numbers[i + 1])
                pairList.push([numbers[i], numbers[i + 1]]);
            else {
                if (pairList.length > 0) {
                    pairList[pairList.length - 1].push(numbers[i]);
                }
            }
        }
        setPairs(pairList);
    };

    return (
        <div id={'listPair'}>
            <button onClick={() => generatePairs()}>Générer les binômes</button>

            {pairs.length > 0 && pairs.map((pair, index) => (
                <p key={index}>[{pair.join(' | ')}]</p>
            ))}
        </div>
    )
}

export default ListPairNumber;