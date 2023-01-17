import FlexItem from "../components/FlexItem"

function FlexContainer({data})
{
    return (
        data.map(data =>
            <FlexItem key={data.component} data={data}/>,
        )
    )
}

export default FlexContainer