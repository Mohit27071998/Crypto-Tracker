
export const convertNumber = (number) => {
    const numberWithCommas = number.toLocaleString();
    var arr = numberWithCommas.split(",");
    if (arr.length === 5) return arr[0] + "." + arr[1].slice(0,2) + "T";  // Give Trillions
    else if (arr.length === 4) return arr[0] + "." + arr[1].slice(0,2) + "B"; // Give Billions
    else if (arr.length === 3) return arr[0] + "." + arr[1].slice(0,2) + "M"; //Give Millions
    else if (arr.length === 2) return arr[0] + "." + arr[1].slice(0,2) + "K";  //Give Thousands
    else return number.toLocaleString();
}


// export const convertNumber = (number) => {
//     const numberWithCommas = number.toLocaleString();
//     var arr = numberWithCommas.split(",");
//     if (arr.length === 5) return arr[0] + "." + arr[1].slice(0,2) + "T";  // Give Trillions
//     else if (arr.length === 4) return arr[0] + "." + arr[1].slice(0,2) + "B"; // Give Billions
//     else if (arr.length === 3) return arr[0] + "." + arr[1].slice(0,2) + "M"; //Give Millions
//     else if (arr.length === 2) return arr[0] + "." + arr[1].slice(0,2) + "K";  //Give Thousands
//     else return number.toLocaleString();
// }
// export const convertNumber = (number) => {
//     const absNumber = Math.abs(number);
//     if (absNumber >= 1e12) {
//         return (absNumber / 1e12).toFixed(2) + "T";
//     } else if (absNumber >= 1e9) {
//         return (absNumber / 1e9).toFixed(2) + "B";
//     } else if (absNumber >= 1e6) {
//         return (absNumber / 1e6).toFixed(2) + "M";
//     } else if (absNumber >= 1e3) {
//         return (absNumber / 1e3).toFixed(2) + "K";
//     }
//     return absNumber.toLocaleString();
// };