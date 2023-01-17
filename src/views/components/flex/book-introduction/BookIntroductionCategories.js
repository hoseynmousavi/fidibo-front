import GetTextConstant from "../../../../seyed-modules/hooks/GetTextConstant"
import BookIntroductionCategoriesItem from "./BookIntroductionCategoriesItem"

function BookIntroductionCategories({categories})
{
    const {textConstant} = GetTextConstant()

    if (categories?.length > 0)
    {
        return (
            <div className="book-introduction-categories">
                <div className="book-introduction-categories-title">{textConstant.categoriesTitle}</div>
                <div className="book-introduction-categories-items">
                    {
                        categories.map(data => <BookIntroductionCategoriesItem key={data.id} data={data}/>)
                    }
                </div>
            </div>
        )
    }
}

export default BookIntroductionCategories