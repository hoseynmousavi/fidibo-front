import FLEX_TYPES from "../../constant/FLEX_TYPES"
import BookLibraryFlex from "./flex/book-library/BookLibraryFlex"
import BookIntroductionFlex from "./flex/book-introduction/BookIntroductionFlex"
import BookVLRowsFlex from "./flex/book-vl-rows/BookVLRowsFlex"
import BookEditionsFlex from "./flex/book-editions/BookEditionsFlex"

function FlexItem({data})
{
    const {component} = data

    let Output
    if (component === FLEX_TYPES.NEW_FLEX_BOOK_LIBRARY) Output = BookLibraryFlex
    else if (component === FLEX_TYPES.NEW_FLEX_BOOK_INTRODUCTION) Output = BookIntroductionFlex
    else if (component === FLEX_TYPES.VL_TEXT_ROWS) Output = BookVLRowsFlex
    else if (component === FLEX_TYPES.NEW_FLEX_BOOK_EDITIONS) Output = BookEditionsFlex

    if (Output) return <Output data={data}/>
}

export default FlexItem