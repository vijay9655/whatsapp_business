import * as types from './Actiontype'
const initialstate={
    register:[],
    login:[],
};

const reducers=(state=initialstate,action)=>{
    switch (action.types) {
        case types.Register:
            return{
                ...state,
                register:action.payload
            }
        case types.Login:
            return {
                ...state,
                login : action.payload
            }
    
        default:
            break;
    }
}
export default reducers;