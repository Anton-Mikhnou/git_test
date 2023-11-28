function findMissingLetter(array) {
    let favoriteArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z'];
    let rightArr = favoriteArr.slice().filter(item => favoriteArr.includes(item) && array.includes(item))
    for (let i = 0; i < array.length; i++){
        if(rightArr.includes(array[i]) == false){
            return array[i];
        }
    }
}

console.log(findMissingLetter(['a','b','c','d','f']));
