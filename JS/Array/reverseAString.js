// naive approach
function reverse(str) {
    // check input type
    if ( !str || str.length < 2 || typeof str !== 'string') return 'hmm, that\'s not a string';
    let parentArr = str.split(' ');
    for (let i=0; i<parentArr.length; i++) { 
        parentArr[i] = parentArr[i].split('')
    }
    for (let j=0; j<parentArr.length; j++) {
        let subArr = [];
        for (let k=parentArr[j].length-1; k>=0; k--){
            subArr.push(parentArr[j][k])
        }
        parentArr[j] = subArr
    }

    for (let l=0; l<parentArr.length; l++) {
        parentArr[l] = parentArr[l].join('')
    }
    parentArr = parentArr.join(' ')
    console.log(parentArr);
}
// reverse('My name is Teniola')
// O(n + a*b + n) = O(2n + a*b) = O(n+a*b) = 0(n + n^2) = 0(n(n+1)) = 0(n(n)) 0(n^2)

// correction
function reverse2(str) {
    // check input type
    if ( !str || str.length < 2 || typeof str !== 'string') return 'hmm, that\'s not a string';
    const backwards = []
    for (let i=str.length-1; i >=0; i--) {
        backwards.push(str[i])
    }
    console.log(backwards.join(''))
}
reverse2('My name is Teniola')
// O(n)

// simplified JS specific
function reverse3(str) {
    // check input type
    return str.split('').reverse().join('')
}
reverse3('My name is Teniola')
// cannot calculate actual big O.

// simplified ES6
const reverse4 = str => [...str].reverse().join('');