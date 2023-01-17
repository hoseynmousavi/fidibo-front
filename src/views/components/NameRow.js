import {Fragment} from "react"

function NameRow({data, title, showField})
{
    if (data?.length > 0)
        return (
            <div className="book-main-box-detail-author">
                <div className="book-main-box-detail-author-title">{title}:</div>
                {
                    data.map((item, index) =>
                        <Fragment key={index}>
                            <div className="book-main-box-detail-author-name">{item[showField]}</div>
                            {index !== data.length - 1 && <div>, </div>}
                        </Fragment>,
                    )
                }
            </div>
        )
}

export default NameRow