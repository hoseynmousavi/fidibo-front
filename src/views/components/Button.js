import {memo} from "react"
import Material from "../../seyed-modules/components/Material"
import MyLoader from "../../seyed-modules/components/MyLoader"
import createMaterialColor from "../../seyed-modules/helpers/createMaterialColor"

function Button({type = "first", className, style, loading, disable, onClick, onDisableClick, children, backgroundColor, loaderWidth = 16})
{
    const ripple = backgroundColor || (type === "outline" ? createMaterialColor({variable: "--first-color"}) : null)
    return (
        <Material className={`btn ${type} ${className} ${loading ? "loading" : ""} ${disable ? "disable" : "active"}`} style={style} disable={disable || loading} onClick={onClick} onDisableClick={onDisableClick} backgroundColor={ripple}>
            {
                loading ?
                    <MyLoader width={loaderWidth}/>
                    :
                    children
            }
        </Material>
    )
}

export default memo(Button)