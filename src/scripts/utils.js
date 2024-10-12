import { colors } from "./filesOptions.js";

function randomColor() {
    const r = Math.floor(Math.random() * colors.length);
    return colors[r];
}
function isMedia(str) {
    const reg = /\.(mp3|mp4|avi|mov|wmv|flv|mkv|webm|ogg|ogv|jpg|jpeg|png|gif|bmp|tiff)$/i;

    return reg.test(str);
}

function getContrastingColor(hex) {
    // Remove o caractere '#' se presente
    hex = hex.replace('#', '');

    // Converte a cor hex para RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Calcula o brilho da cor (YIQ)
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Se o brilho for maior que 128, retorna preto, caso contrário, branco
    return brightness > 128 ? '#000000' : '#FFFFFF';
}

export { randomColor, isMedia, getContrastingColor };