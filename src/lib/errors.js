export const checkData = (data, type) => {
    if (data === '') {
        return JSON.stringify({error:`Error: ${type} is empty`});
    }
}
