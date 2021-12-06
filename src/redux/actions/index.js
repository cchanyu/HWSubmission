export const textChange = (text) => {
    console.log(text)
    // Actions can return a type and a payload of data
    return{
        type: "TEXT_CHANGE",
        payload: text
    }
}