export function hexToRgba(hex: string, opacity: number) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    console.log(r, g, b)

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};