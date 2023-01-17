import {createContext, useEffect, useReducer} from "react"
import {LOGOUT} from "./authTypes"
import logoutManager from "../../seyed-modules/helpers/logoutManager"

export const AuthContext = createContext(null)

function AuthProvider({children})
{
    const initialState = null
    const init = () => initialState
    const [state, dispatch] = useReducer(reducer, initialState, init)

    useEffect(() =>
    {
        logoutManager.setLogOut({callBack: () => dispatch({type: LOGOUT})})
    }, [])

    function reducer(state, action)
    {
        switch (action.type)
        {
            case LOGOUT:
            {
                return init()
            }
            default:
            {
                throw new Error()
            }
        }
    }

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider