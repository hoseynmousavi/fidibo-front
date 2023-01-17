import {createRoot} from "react-dom/client"
import "./styles/index.scss"
import App from "./App"
import registerSW from "./serviceWorkerRegistration"
import withRouter from "./seyed-modules/helpers/withRouter"
import ThemeProvider from "./seyed-modules/context/theme/ThemeReducer"
import AuthProvider from "./context/auth/authReducer"
import LanguageProvider from "./seyed-modules/context/language/LanguageReducer"
import BookProvider from "./context/book/bookReducer"

const root = createRoot(document.getElementById("root"))

const WrappedApp = withRouter(App)

root.render(
    <LanguageProvider>
        <ThemeProvider>
            <AuthProvider>
                <BookProvider>
                    <WrappedApp/>
                </BookProvider>
            </AuthProvider>
        </ThemeProvider>
    </LanguageProvider>,
)

// request.init({
//     refreshFunc: ,
//     offlineSendingArr: ,
// })

registerSW()