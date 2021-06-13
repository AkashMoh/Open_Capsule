export const unitSorter = (quantityNeededBuyer, unitEndSeller) => {
    let newUnitEndofSeller = unitEndSeller - quantityNeededBuyer
    let unitStartBuyer = newUnitEndofSeller + 1
    let unitEndBuyer = unitEndSeller

    return({newUnitEndofSeller, unitStartBuyer, unitEndBuyer})
}