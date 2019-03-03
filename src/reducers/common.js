const defaultState = {
    isFetching: false
}

export default function(state = defaultState, {type, ...action}) {
    switch(type) {
        default: return state;
    }
}

