export const truncate = (text, length = 50) => {
    if (text.length <= length) {
        return text;
    }
    return `${text.substring(0, length)}...`;
};

export const capitalize = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};