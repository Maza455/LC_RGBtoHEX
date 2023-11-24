function RGBToHex(r, g, b) {
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    };

    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(RGBToHex(255, 0, 0));
console.log(RGBToHex(252, 186, 3));

  