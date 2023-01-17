import StarSvg from "../../../media/svg/StarSvg"
import GetTextConstant from "../../../seyed-modules/hooks/GetTextConstant"
import showNumber from "../../../helpers/showNumber"
import Button from "../Button"
import CONTENT_TYPES from "../../../constant/CONTENT_TYPES"

function BookBuyBox({content_type, badges, rate: {action, responses, score}, price, status})
{
    const {textConstant} = GetTextConstant()
    const empty = responses === 0
    const isEbook = content_type === CONTENT_TYPES.ebook
    return (
        <div className="book-buy-box">
            <div className="book-buy-box-header">
                <div className="book-buy-box-header-first">
                    <div className="book-buy-box-header-rate">
                        <StarSvg className={`book-buy-box-header-rate-icon ${empty ? "empty" : ""}`}/>
                        <div className={`book-buy-box-header-rate-title ${empty ? "empty" : ""}`}>
                            {score}
                            <div className="book-buy-box-header-rate-title-responses">
                                ({empty ? textConstant.withoutComment : responses})
                            </div>
                        </div>
                    </div>
                    {/*<div className="book-buy-box-header-rate-badge">*/}
                    {/*    <div className="book-buy-box-header-rate-badge-item">😍 پرکشش ({responses})</div>*/}
                    {/*</div>*/}
                </div>
                <div className="book-buy-box-header-second">
                    {/*<div className="book-buy-box-header-discount">*/}
                    {/*    <div className="book-buy-box-header-discount-price">44,000</div>*/}
                    {/*    <div className="book-buy-box-header-discount-percent">٪88</div>*/}
                    {/*</div>*/}
                    <div className="book-buy-box-header-price">
                        <div className="book-buy-box-header-price-number">{showNumber(price)}</div>
                        <div className="book-buy-box-header-price-title">{textConstant.currency}</div>
                    </div>
                </div>
            </div>
            <Button className="book-buy-box-main-btn" type="second">
                {textConstant.buy}
            </Button>
            <div className="book-buy-box-footer">
                <Button className="book-buy-box-footer-first" type="third">
                    {textConstant.borrow}
                </Button>
                <Button className="book-buy-box-footer-second" type={isEbook ? "first" : "forth"}>
                    {
                        isEbook ?
                            textConstant.getExample
                            :
                            textConstant.readExample
                    }
                </Button>
            </div>
        </div>
    )
}

export default BookBuyBox