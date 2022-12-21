const products = [
    {
        productid: 1,
        categoryid: 1,
        title: "велосипед",
        price: 45000,
        count: 13,
        marks: [1, 4, 3, 5, 4, 3]
    },
    {
        productid: 2,
        categoryid: 1,
        title: "ролики",
        price: 25000,
        count: 22,
        marks: [3, 4, 3, 5]
    },
    {
        productid: 3,
        categoryid: 2,
        title: "стол",
        price: 10000,
        count: 7,
        marks: [4, 4, 5, 4, 5, 5, 5]
    },
    {
        productid: 4,
        categoryid: 3,
        title: "шкаф",
        price: 27000,
        count: 17,
        marks: [3, 2, 4, 3, 4, 3, 2, 4]
    },
    {
        productid: 5,
        categoryid: 3,
        title: "дверь",
        price: 7000,
        count: 1,
        marks: [2, 3, 1, 4, 3]
    }
];

// 1) создать функцию getProduct, которая в качестве аргумента получает id продукта и возвращает его

function getProduct(id){
    return products.find(({productid}) => productid === id);
};

// 2) создать функцию getTotalPrice, которая не получает аргументов и возвращает общую сумму всех товаров. Произмедение кол-ва на цену и сумма этого значения у всех товаров. 

function getTotalPrice(){
    return products.reduce((prev, {count, price}) => prev + count * price, 0);   
};

// 3) создать функцию, getAvgMark  которая получает в качестве аргумента id продукта и возвращает среднюю оценку данного продукта.

function getAvgMark(id){
    const item =  products.find(({productid}) => productid === id);
     return item.marks.reduce((a , b) => a + b) / item.marks.length;
};

// 4) создать функцию, getAvgMarkByCategory которая получает в качестве аргумента id категории и возвращает среднюю оценку всех товаров данной категории.

function getAvgMarkByCategory(id){
    const item =  products.filter(({categoryid}) => categoryid === id)
                          .reduce((prev, {marks}) => [...prev, ...marks], [])
    return item.reduce((a , b) => a + b) / item.length;
};

// 5) создайте функцию getLovelyProduct которая возвращает продукт с наибольшим рейтингом.

function getLovelyProduct(){
    const mark_arr = products.map(product => {
        const markSum = product.marks.reduce((a , b) => a + b);
        product.avg_mark = markSum / product.marks.length;
        return product
    })

    const lovely = mark_arr.reduce(
        (prev, item) => prev.avg_mark > item.avg_mark ? prev : item
    );
    return lovely;
}