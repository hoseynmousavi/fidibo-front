import BookMainHeaderItem from "./BookMainHeaderItem"

function BookMainHeader({firstColumnFlex})
{
    return (
        <div className="book-introduction-header">
            {
                firstColumnFlex?.map((data, index) =>
                    <BookMainHeaderItem key={data.component} data={data} isActive={index === 0}/>,
                )
            }
        </div>
    )
}

export default BookMainHeader