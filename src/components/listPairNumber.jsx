function ListPairNumber({state, dispatch}) {
    return (
        <div id={'listPair'}>
            <button onClick={() => dispatch({type: 'MakePair'})}>Générer les binômes</button>

            {state.pairs.length > 0 && state.pairs.map((pair, index) => (
                <p key={index}>[{pair.join(' | ')}]</p>
            ))}
        </div>
    )
}

export default ListPairNumber;