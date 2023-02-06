export const numbersPage = (location, RESIDENTS_PERPAGE) => {
    const quanlilyPages = Math.ceil(location?.residents.length / RESIDENTS_PERPAGE)

    const arrayPages = []
    for (let i = 1; i <= quanlilyPages; i++) {
        arrayPages.push(i)
    }
    return arrayPages
}
