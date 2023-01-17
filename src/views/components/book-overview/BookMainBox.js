import GetTextConstant from "../../../seyed-modules/hooks/GetTextConstant"
import NameRow from "../NameRow"
import Button from "../Button"
import BookmarkSvg from "../../../media/svg/BookmarkSvg"
import GiftSvg from "../../../media/svg/GiftSvg"
import ShareSvg from "../../../media/svg/ShareSvg"
import MoreCircleSvg from "../../../media/svg/MoreCircleSvg"
import ShowImageBadge from "../ShowImageBadge"

function BookMainBox({authors, publishers, cover: {image, background}, format, title, time, badges})
{
    const {textConstant} = GetTextConstant()
    return (
        <div className="book-main-box">
            <ShowImageBadge className="book-main-box-img" src={image} alt={title} background={background} format={format} time={time} badges={badges}/>
            <div className="book-main-box-detail">
                <h1 className="book-main-box-detail-title">{title}</h1>
                <NameRow title={textConstant[authors?.length > 1 ? "authors" : "author"]} data={authors} showField="name"/>
                <NameRow title={textConstant[authors?.length > 1 ? "publishers" : "publisher"]} data={publishers} showField="name"/>
            </div>
            <div className="book-main-box-buttons">
                <Button className="book-main-box-buttons-item"><BookmarkSvg className="book-main-box-buttons-item-icon"/></Button>
                <Button className="book-main-box-buttons-item"><GiftSvg className="book-main-box-buttons-item-icon"/></Button>
                <Button className="book-main-box-buttons-item"><ShareSvg className="book-main-box-buttons-item-icon"/></Button>
                <Button className="book-main-box-buttons-item"><MoreCircleSvg className="book-main-box-buttons-item-icon"/></Button>
            </div>
        </div>
    )
}

export default BookMainBox