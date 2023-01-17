import {useRef, useState} from "react"
import Button from "../../Button"
import GetTextConstant from "../../../../seyed-modules/hooks/GetTextConstant"
import ArrowSvg from "../../../../media/svg/ArrowSvg"
import BookIntroductionCategories from "./BookIntroductionCategories"
import BookIntroductionTags from "./BookIntroductionTags"

function BookIntroductionFlex({data: {items}})
{
    const {categories, introduction, tags} = items[0] ?? {}
    const {description/*, title, short_description, audio*/} = introduction || {}
    const {textConstant} = GetTextConstant()
    const defaultDescHeight = "115px"
    const [descHeight, setDescHeight] = useState(defaultDescHeight)
    const descRef = useRef(null)
    const isShowingComplete = !(descHeight === defaultDescHeight)

    function toggleDesc()
    {
        setDescHeight(isShowingComplete ? defaultDescHeight : descRef.current.scrollHeight + "px")
    }

    return (
        <div className="book-introduction-desc">
            <div>
                <div className="book-introduction-desc-text" style={{height: descHeight}} ref={descRef}>
                    {description}
                </div>
                <Button className="book-introduction-desc-btn" type="outline" onClick={toggleDesc}>
                    {
                        isShowingComplete ?
                            textConstant.showLess
                            :
                            textConstant.showComplete
                    }
                    <ArrowSvg className={`book-introduction-desc-text-btn-icon ${isShowingComplete ? "complete" : ""}`}/>
                </Button>
            </div>

            <BookIntroductionCategories categories={categories}/>
            <BookIntroductionTags tags={tags}/>
        </div>
    )
}

export default BookIntroductionFlex