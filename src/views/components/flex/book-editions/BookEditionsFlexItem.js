import Material from "../../../../seyed-modules/components/Material"
import Link from "../../../../seyed-modules/components/Link"
import ImageShow from "../../../../seyed-modules/components/ImageShow"

function BookEditionsFlexItem({data: {image, title, total}})
{
    return (
        <Link className="book-editions-content-item">
            <Material className="book-editions-content-item-material">
                <ImageShow className="book-editions-content-item-material-icon" src={image} alt={title}/>
                <div className="book-editions-content-item-material-total">{total}</div>
                <div className="book-editions-content-item-material-title">{title}</div>
            </Material>
            <div className="book-editions-content-item-border"/>
        </Link>
    )
}

export default BookEditionsFlexItem