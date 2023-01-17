import GetBook from "../../hooks/GetBook"
import LoadingWrapper from "../../seyed-modules/components/LoadingWrapper"
import Breadcrumb from "../../seyed-modules/components/breadcrumb/Breadcrumb"
import BookMainBox from "../components/book-overview/BookMainBox"
import BookBuyBox from "../components/book-overview/BookBuyBox"
import OVERVIEW_FLEX from "../../constant/OVERVIEW_FLEX"
import FlexContainer from "../containers/FlexContainer"
import BookMainHeader from "../components/book-overview/BookMainHeader"
import Footer from "../containers/Footer"

function BookOverviewPage({route: {match: {params: {id}}}})
{
    const {data, isLoading} = GetBook({id})
    const {
        flex,
        breadcrumb, content_type, price, rate, status, badges,
        authors, publishers, cover, format, title, time, // subtitle, file
    }
        = data || {}

    let firstColumnFlex = []
    let secondColumnFlex = []

    if (flex)
    {
        flex.forEach(item =>
        {
            if (OVERVIEW_FLEX.first_column_type.includes(item.component)) firstColumnFlex.push(item)
            else if (OVERVIEW_FLEX.second_column_type.includes(item.component)) secondColumnFlex.push(item)
        })
    }

    return (
        <>
            <div className="book-overview">
                <div className="book-overview-content">
                    {
                        isLoading ?
                            <LoadingWrapper className="book-overview-loading"/>
                            :
                            <>
                                <Breadcrumb breadcrumb={breadcrumb}/>

                                <div className="book-overview-first-section">
                                    <BookMainBox authors={authors}
                                                 publishers={publishers}
                                                 cover={cover}
                                                 format={format}
                                                 title={title}
                                                 time={time}
                                                 badges={badges}
                                    />
                                    {
                                        firstColumnFlex.length > 0 &&
                                        <div className="book-introduction">
                                            <BookMainHeader firstColumnFlex={firstColumnFlex}/>
                                            <div className="book-introduction-content">
                                                <FlexContainer data={firstColumnFlex}/>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div className="book-overview-second-section">
                                    <BookBuyBox badges={badges}
                                                rate={rate}
                                                price={price}
                                                content_type={content_type}
                                                status={status}
                                    />
                                    <FlexContainer data={secondColumnFlex}/>
                                </div>
                            </>
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default BookOverviewPage