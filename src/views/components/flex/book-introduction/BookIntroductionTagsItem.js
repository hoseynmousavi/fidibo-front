import Link from "../../../../seyed-modules/components/Link"
import Material from "../../../../seyed-modules/components/Material"

function BookIntroductionTagsItem({data: {id, name, action}})
{
    return (
        <Link>
            <Material className="book-introduction-tags-items-item">
                {name}
            </Material>
        </Link>
    )
}

export default BookIntroductionTagsItem