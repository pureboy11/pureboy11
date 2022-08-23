
import { useState } from 'react';


function priceSort() {

    var priceSorting = [...nfts];
    var priceCompare = (key) => (a, b) => {
        return a[key] > b[key]
            ? 1
            : a[key] < b[key]
                ? -1
                : 0;
    };
    priceSorting.sort(priceCompare('price')); // price란 녀석들을 정렬시켜라
    setNfts(priceSorting);
}

export default priceFilter