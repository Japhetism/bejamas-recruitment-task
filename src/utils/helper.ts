export const productSorting = (products: any, sortType: string, sortCategory: string) => {
    let sortedGlobalProducts: any = [];
    return sortedGlobalProducts = products.sort((a:any, b:any) => {
        if(sortType === "ascending") {
            if (a.data[sortCategory] < b.data[sortCategory])
                return -1;
            if (a.data[sortCategory] > b.data[sortCategory])
                return 1;
            return 0;
        }else{
            if (a.data[sortCategory]> b.data[sortCategory])
                return -1;
            if (a.data[sortCategory] < b.data[sortCategory])
                return 1;
            return 0;
        }
    })
}