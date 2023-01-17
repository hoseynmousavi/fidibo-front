import Material from "../../../seyed-modules/components/Material"

function BookMainHeaderItem({data: {title, subtitle}, isActive})
{
    return (
        <Material className={`book-introduction-header-item ${isActive ? "active" : ""}`}>
            <div className="book-introduction-header-item-content">
                {title || subtitle}
                <div className="book-introduction-header-item-content-border"/>
            </div>
        </Material>
    )
}

export default BookMainHeaderItem