import ToastContainer from "./seyed-modules/components/ToastContainer"
import ThemeColorBar from "./seyed-modules/components/ThemeColorBar"
import Switch from "./seyed-modules/components/Switch"
import Route from "./seyed-modules/components/Route"
import URLS from "./constant/URLS"
import {lazy} from "react"
import Header from "./views/containers/Header"

const BookOverviewPage = lazy(() => import("./views/pages/BookOverviewPage"))

function App()
{
    return (
        <div className="index-temp">
            <Header/>
            <Switch>
                <Route path={URLS.bookOverview(":id")} render={route => <BookOverviewPage route={route}/>}/>
                <Route path={URLS.notFound} render={() => "404"}/>
            </Switch>


            <ThemeColorBar/>
            <ToastContainer/>
        </div>
    )
}

export default App