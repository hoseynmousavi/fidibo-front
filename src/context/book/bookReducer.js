import {createContext, useEffect, useReducer} from "react"
import logoutManager from "../../seyed-modules/helpers/logoutManager"
import {LOGOUT} from "../auth/authTypes"
import {GET_BOOK, GET_BOOK_FLEX} from "./bookTypes"

export const BookContext = createContext(null)

function BookProvider({children})
{
    const initialState = {
        results: {},
    }
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
            case GET_BOOK:
            {
                const {res: {data: {result}}} = action.payload
                const data = result[0]
                return {
                    ...state,
                    results: {
                        ...state.results,
                        [data.id]: {
                            ...state.results[data.id],
                            ...data,
                        },
                    },
                }
            }
            case GET_BOOK_FLEX:
            {
                const {res: {data: {result}}, bookId} = action.payload
                return {
                    ...state,
                    results: {
                        ...state.results,
                        [bookId]: {
                            ...state.results[bookId],
                            flex: result.sort((a, b) => a.order - b.order),
                        },
                    },
                }
            }
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
        <BookContext.Provider value={{state, dispatch}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookProvider