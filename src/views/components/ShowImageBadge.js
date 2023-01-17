import ImageShow from "../../seyed-modules/components/ImageShow"
import EpubSvg from "../../media/svg/EpubSvg"
import TimerSvg from "../../media/svg/TimerSvg"
import FidiPlusBadgeSvg from "../../media/svg/FidiPlusBadgeSvg"

function ShowImageBadge({className, src, alt, background: {r, g, b, a}, format, time, badges})
{
    const {subscription} = badges
    return (
        <div className={`show-image ${className}`}>
            <ImageShow className="show-image-img" src={src} alt={alt} style={{backgroundColor: `rgba(${r},${g},${b},${a})`}}/>
            {
                subscription &&
                <div className="show-image-header">
                    <div className="show-image-header-badge plus"><FidiPlusBadgeSvg className="show-image-header-badge-icon"/></div>
                </div>
            }
            {
                (format || time) &&
                <div className="show-image-footer">
                    {format && <div className="show-image-footer-item"><EpubSvg className="show-image-footer-item-icon"/>{format}</div>}
                    {format && time && <div className="show-image-footer-separator"/>}
                    {time && <div className="show-image-footer-item"><TimerSvg className="show-image-footer-item-icon"/>{time}</div>}
                </div>
            }
        </div>
    )
}

export default ShowImageBadge