import {useContext, useRef} from "react"
import {BookContext} from "../context/book/bookReducer"
import GetData from "../seyed-modules/request/GetData"
import bookActions from "../context/book/bookActions"

function GetBook({id})
{
    const {state: {results}, dispatch} = useContext(BookContext)
    const data = results[id]
    const isLoading = !data
    const cancelToken = useRef(null)

    GetData({
        request,
        isLoading,
    })

    function request()
    {
        return bookActions.getItem({id, dispatch, cancel: cancelSource => cancelToken.current = cancelSource})
    }

    return {data, isLoading}
}

export default GetBook