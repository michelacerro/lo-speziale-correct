// formReducer
export const sentMessage = () => {
    return {
        type: 'SENT'
    };
};

export const newMessage = () => {
    return {
        type: 'NEW'
    };
};


// filtersReducer
export const openFilters = () => {
    return {
        type: 'OPEN'
    };
};

export const closeFilters = () => {
    return {
        type: 'CLOSE'
    };
};