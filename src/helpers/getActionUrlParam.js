function getActionUrlParam({action})
{
    const {inputs, url: tempUrl} = action
    const param = inputs.reduce((sum, item, index) => sum + `${item.key}=${item.value}${index === inputs.length - 1 ? "" : "&"}`, "?")
    const url = tempUrl.substring(1, tempUrl.length)
    return {url, param}
}

export default getActionUrlParam