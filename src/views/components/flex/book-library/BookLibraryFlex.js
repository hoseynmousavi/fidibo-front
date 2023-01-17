import GetTextConstant from "../../../../seyed-modules/hooks/GetTextConstant"
import ShelveSvg from "../../../../media/svg/ShelveSvg"
import BookmarkSvg from "../../../../media/svg/BookmarkSvg"
import BookFinishSvg from "../../../../media/svg/BookFinishSvg"
import BookLibraryFlexItem from "./BookLibraryFlexItem"

function BookLibraryFlex({data: {items}})
{
    const {shelve, favorite, finished} = items[0]
    const {textConstant} = GetTextConstant()
    return (
        <div className="book-library">
            <div className="book-library-title">{textConstant.placeThisTitle}</div>
            <div className="book-library-actions">
                <BookLibraryFlexItem title={textConstant.myShelf} Icon={ShelveSvg} data={shelve}/>
                <BookLibraryFlexItem title={textConstant.myBookmarks} Icon={BookmarkSvg} data={favorite}/>
                <BookLibraryFlexItem title={textConstant.myReads} Icon={BookFinishSvg} data={finished}/>
            </div>
        </div>
    )
}

export default BookLibraryFlex