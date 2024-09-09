function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const input = "the quick brown fox";
const output = capitalizeWords(input);
console.log(output);