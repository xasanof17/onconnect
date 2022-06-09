const initialState = [
    {
        name: 'admin',
        password: 'admin001'
    }
]

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default rootReducer;