const findFirstCharacterStringInBracket = (str) => {
    const openBracket = '('
    const closeBracket = ')'

    const openBracketPosition = str.indexOf(openBracket)
    const closeBracketPosition = str.indexOf(closeBracket)

    const isThereBracket = openBracketPosition !== -1 && closeBracketPosition !== -1
    
    return isThereBracket ? str[openBracketPosition + 1] : 'The paramater don\'t fulfill the requirement'
}


const str1 = '(halo)'
console.log('The first character string => ', findFirstCharacterStringInBracket(str1))


const findFirstWordStringInBracket = (str) => {
    const openBracket = '('
    const closeBracket = ')'

    const openBracketPosition = str.indexOf(openBracket)
    const closeBracketPosition = str.indexOf(closeBracket)
    const splitStr = str.replace(openBracket, '').replace(closeBracket, '').split(' ')
    const isThereBracket = openBracketPosition !== -1 && closeBracketPosition !== -1
    
    return isThereBracket ? splitStr[0] : 'The paramater don\'t fulfill the requirement'
}


const str2 = '(halo gengs)'
console.log('The first word string => ', findFirstWordStringInBracket(str2))