function findMissingLetter(array) {
  let favoriteArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
  'p','q','r','s','t','u','v','w','x','y','z'];
  let rightArr = favoriteArr.slice().filter(item => favoriteArr.includes(item) && array.includes(item))
  for (let i = 0 ; i < rightArr.length ; i++) {
    for (let j = 0 ; j < array.length; j++) {
      if (!array[j].includes(rightArr[i])) {
        return rightArr[i];        
      }
    }
  }
}

console.log(findMissingLetter(['a','b','c','d','f']));
