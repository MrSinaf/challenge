export const initialState = {
    numbers: [],
    pairs: []
}

function ListReducer(state, action) {
    switch (action.type) {
        case 'AddUniqueNumber':
            let rand;
            do {
                rand = Math.floor(Math.random() * 50);
            }
            while (state.numbers.includes(rand))

            return {
                ...state,
                numbers: [...state.numbers, rand]
            }
        case 'MakePair':
            let pairList = [];
            for (let i = 0; i < state.numbers.length; i += 2) {
                if (state.numbers[i + 1])
                    pairList.push([state.numbers[i], state.numbers[i + 1]]);
                else {
                    if (pairList.length > 0) {
                        pairList[pairList.length - 1].push(state.numbers[i]);
                    }
                }
            }

            return {
                ...state,
                pairs: pairList
            }
    }
}

export default ListReducer;