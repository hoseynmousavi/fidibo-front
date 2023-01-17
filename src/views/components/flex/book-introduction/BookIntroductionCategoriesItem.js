import Material from "../../../../seyed-modules/components/Material"
import Link from "../../../../seyed-modules/components/Link"

function BookIntroductionCategoriesItem({data: {id, name, action}})
{
    return (
        <Link>
            <Material className="book-introduction-categories-items-item">
                {name}
            </Material>
        </Link>
    )
}

export default BookIntroductionCategoriesItem