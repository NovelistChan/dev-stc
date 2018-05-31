const C_SET_LIST = 'Contract/SET_LIST';
const C_RM_CONTENT = 'Contract/RM_CONTENT';
const C_SET_CONTENT = 'Contract/SET_CONTENT';
const C_SET_FILTER = 'Contract/SET_FILTER';

const CC_SET_LIST = 'ContractCheck/SET_LIST';

const initialContractState = {
    listFilter: () => true,//绑定按钮传入的过滤条件
    listMap: { },  //项目集合，用key-value表示，key为id，value为ContractData
    //ContractData为对象，仍然包含id字段
};

export const ContractReducer = (state = initialContractState, action) => {
    switch (action.type) {
        case C_SET_LIST:
            const list = action.payload;
            return {
                ...state,
                listMap: list.reduce((listMap, ContractData) => {
                    listMap[ContractData.id] = ContractData;
                    return listMap;
                }, {}),
            };
        case C_RM_CONTENT:
            const id = action.payload;
            const newListMap = state.listMap;
            delete newListMap[id];
            return {
                ...state,
                listMap: newListMap
            };
        case C_SET_CONTENT: {
            const {id} = action.payload;
            const ContractData = action.payload;
            return {
                ...state,
                listMap: {
                    ...state.listMap,
                    [id]: ContractData,
                },
            };
        }
        case C_SET_FILTER:
            const listFilter = action.payload;
            return {
                ...state,
                listFilter: listFilter,
            };
        default:
            return state;
    }
};

export const setContractList = (list) => {
    return {
        type: C_SET_LIST,
        payload: list,
    }
};

export const removeContract = (id) => {
    return {
        type: C_RM_CONTENT,
        payload: id,
    }
};

export const setContractContent = (ContractData) => {
    return {
        type: C_SET_CONTENT,
        payload: ContractData,
    }
};

export const setContractFilter = (listFilter) => {
    return {
        type: C_SET_FILTER,
        payload: listFilter,
    }
};


const initialContractCheckState = {
    listFilter: () => true,//绑定按钮传入的过滤条件
    listMap: { },  //项目集合，用key-value表示，key为id，value为ContractData
    //ContractData为对象，仍然包含id字段
};

export const ContractCheckReducer = (state = initialContractCheckState, action) => {
    switch (action.type) {
        case CC_SET_LIST:
            const list = action.payload;
            return {
                ...state,
                listMap: list.reduce((listMap, ContractCheckData) => {
                    listMap[ContractCheckData.id] = ContractCheckData;
                    return listMap;
                }, {}),
            };
        /*case RM_CONTENT:
            const id = action.payload;
            return {
                ...state,
                listMap: {
                    ...state.listMap,
                    [id]: undefined,
                },
            };
        case SET_CONTENT: {
            const {id} = action.payload;
            const ContractData = action.payload;
            return {
                ...state,
                listMap: {
                    ...state.listMap,
                    [id]: ContractData,
                },
            };
        }
        case SET_FILTER:
            const listFilter = action.payload;
            return {
                ...state,
                listFilter: listFilter,
            };*/
        default:
            return state;
    }
};

export const setContractCheckList = (list) => {
    return {
        type: CC_SET_LIST,
        payload: list,
    }
};