import GetTextConstant from "../../../../seyed-modules/hooks/GetTextConstant"
import Material from "../../../../seyed-modules/components/Material"
import ArrowSvg from "../../../../media/svg/ArrowSvg"
import BookEditionsFlexItem from "./BookEditionsFlexItem"

function BookEditionsFlex({data: {items}})
{
    const {textConstant} = GetTextConstant()
    return (
        <div className="book-editions">
            <div className="book-editions-header">
                <div className="book-editions-header-title">{textConstant.bookEditions}</div>
                <Material className="book-editions-header-btn">
                    <ArrowSvg className="book-editions-header-btn-icon"/>
                </Material>
            </div>
            <div className="book-editions-content">
                {
                    items.map((data, index) =>
                        <BookEditionsFlexItem key={index} data={data}/>,
                    )
                }
            </div>
        </div>
    )
}

export default BookEditionsFlex