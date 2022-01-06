const formReducer = (state = false, action) => {
    switch (action.type) {
        case 'SENT':
            return state = true;
        case 'NEW':
            return state = false;
        default:
            return state;
    };
};
export default formReducer;