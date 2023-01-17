import BookVLRowsFlexItem from "./BookVLRowsFlexItem"

function BookVLRowsFlex({data: {title, items}})
{
    return (
        <div className="book-vl-rows">
            <h2 className="book-vl-rows-title">{title}</h2>
            {
                items.map((data, index) =>
                    <BookVLRowsFlexItem key={index} data={data}/>,
                )
            }
        </div>
    )
}

export default BookVLRowsFlex