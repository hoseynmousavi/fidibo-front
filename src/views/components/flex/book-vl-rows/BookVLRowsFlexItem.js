function BookVLRowsFlexItem({data: {title, subtitle, action}})
{
    return (
        <div className="book-vl-rows-item">
            <div className="book-vl-rows-item-title">{title}</div>
            <div className={`book-vl-rows-item-subtitle ${action ? "have-action" : ""}`}>{subtitle}</div>
        </div>
    )
}

export default BookVLRowsFlexItem