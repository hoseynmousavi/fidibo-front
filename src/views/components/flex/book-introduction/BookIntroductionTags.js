import GetTextConstant from "../../../../seyed-modules/hooks/GetTextConstant"
import BookIntroductionTagsItem from "./BookIntroductionTagsItem"

function BookIntroductionTags({tags})
{
    const {textConstant} = GetTextConstant()

    if (tags?.length > 0)
    {
        return (
            <div className="book-introduction-tags">
                <div className="book-introduction-tags-title">{textConstant.tagsTitle}</div>
                <div className="book-introduction-tags-items">
                    {
                        tags.map((data, index) => <BookIntroductionTagsItem key={index} data={data}/>)
                    }
                </div>
            </div>
        )
    }
}

export default BookIntroductionTags