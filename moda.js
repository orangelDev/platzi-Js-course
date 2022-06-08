const  list1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const list1Count = {};

list1.map(
    function(element) {
        if (list1Count[element]) {
            list1Count[element] += 1;
        }else {
            list1Count[element] = 1;
        }
    }
);

const list1Array = Object.entries(list1Count).sort(
    function(elementA, elementB) {
       return  elementA[1] - elementB[1];
    }
);

const  moda = list1Array[list1Array.length - 1];