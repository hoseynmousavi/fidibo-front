import Button from "../../Button"

function BookLibraryFlexItem({title, Icon, data: {status, action}})
{
    return (
        <div className="book-library-actions-item">
            <Button className="book-library-actions-item-btn">
                <Icon className="book-library-actions-item-btn-icon"/>
            </Button>
            <div className="book-library-actions-item-title">{title}</div>
        </div>
    )
}

export default BookLibraryFlexItem