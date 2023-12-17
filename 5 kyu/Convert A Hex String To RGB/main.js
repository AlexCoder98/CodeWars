function hexStringToRGB(hexString) {
    const hexConversionData = { "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "a": "10", "b": "11", "c": "12", "d": "13", "e": "14", "f": "15" };
    const colors = ["r", "g", "b"];
    const rgb = {};
    const newHexCode = hexString.split("").filter(el => el != "#").map(el => el.match(/[A-F]/g) ? el.toLowerCase() : el);
    for (let i = 0; i < newHexCode.length; i++) {
        if (i % 2 == 0) {
            console.log(i);
            const hexColor = (+hexConversionData[newHexCode[i]] * 16) + (+hexConversionData[newHexCode[i + 1]]);
            rgb[colors[i / 2]] = hexColor;
        }
    }
    return rgb;
}

const result = hexStringToRGB("#beaded");
// console.log(result);