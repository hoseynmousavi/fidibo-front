import LogoSvg from "../../media/svg/LogoSvg"
import SearchSvg from "../../media/svg/SearchSvg"
import GetTextConstant from "../../seyed-modules/hooks/GetTextConstant"
import Button from "../components/Button"
import UserSvg from "../../media/svg/UserSvg"
import BasketSvg from "../../media/svg/BasketSvg"
import MobileSvg from "../../media/svg/MobileSvg"
import ArrowSvg from "../../media/svg/ArrowSvg"
import HomeSvg from "../../media/svg/HomeSvg"
import HeaderCategory from "../components/HeaderCategory"
import BookSvg from "../../media/svg/BookSvg"
import PodcastSvg from "../../media/svg/PodcastSvg"
import MagazineSvg from "../../media/svg/MagazineSvg"
import FidiPlusSvg from "../../media/svg/FidiPlusSvg"

function Header()
{
    const {textConstant} = GetTextConstant()
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-top">
                    <LogoSvg className="header-top-logo"/>
                    <label className="header-top-search">
                        <SearchSvg className="header-top-search-icon"/>
                        <input className="header-top-search-input" placeholder={textConstant.searchPlaceholder}/>
                    </label>
                    <Button type="first">
                        <UserSvg className="header-top-login-icon"/>
                        <div>{textConstant.loginSignup}</div>
                    </Button>
                    <Button className="header-top-basket" type="first">
                        <BasketSvg className="header-top-basket-icon"/>
                    </Button>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-categories">
                        <HeaderCategory title={textConstant.home} Icon={HomeSvg}/>
                        <HeaderCategory title={textConstant.audioTextBooks} Icon={BookSvg}/>
                        <HeaderCategory title={textConstant.podcasts} Icon={PodcastSvg}/>
                        <HeaderCategory title={textConstant.magazines} Icon={MagazineSvg}/>
                        <HeaderCategory title={textConstant.fidiPlus} Icon={FidiPlusSvg} isPlus/>
                    </div>
                    <Button className="header-bottom-download">
                        <MobileSvg className="header-bottom-download-icon"/>
                        <div className="header-bottom-download-title">{textConstant.downloadApp}</div>
                        <ArrowSvg className="header-bottom-download-arrow"/>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header