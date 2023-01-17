import request from "../../seyed-modules/request/request"
import API_URLS from "../../constant/API_URLS"
import {GET_BOOK, GET_BOOK_FLEX} from "./bookTypes"
import getActionUrlParam from "../../helpers/getActionUrlParam"

function getItem({id, dispatch, cancel})
{
    return request.get({url: API_URLS.getBook, param: id, cancel})
        .then(res =>
        {
            dispatch({
                type: GET_BOOK,
                payload: {res},
            })

            if (res?.data?.result?.[0]?.action?.event === "immediate")
            {
                const {action} = res.data.result[0]
                const {url, param} = getActionUrlParam({action})
                request.get({url, param})
                    .then(res =>
                    {
                        dispatch({
                            type: GET_BOOK_FLEX,
                            payload: {res, bookId: id},
                        })
                    })
            }
        })
}

const bookActions = {
    getItem,
}

export default bookActions