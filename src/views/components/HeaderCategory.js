import Button from "./Button"

function HeaderCategory({title, Icon, isPlus})
{
    return (
        <Button className="header-bottom-categories-item">
            <Icon className="header-bottom-categories-item-icon"/>
            <div className={`header-bottom-categories-item-title ${isPlus ? "plus" : ""}`}>
                {title}
            </div>
        </Button>
    )
}

export default HeaderCategory