export const createDiv = (additionalClasses = []) => {
    const div = document.createElement('div');

    div.classList.add(...additionalClasses);

    return div;
};

export const createImg = (src, alt, additionalClasses) => {
    const img = document.createElement('img');

    img.src = src;
    img.alt = alt;
    img.classList.add(...additionalClasses);

    return img;
};

export const createBtn = (text, additionalClasses, onClickHandler) => {
    const btn = document.createElement('button');

    btn.classList.add(...additionalClasses);
    btn.textContent = text;
    btn.addEventListener('click', onClickHandler);

    return btn;
};

export const clearDiv = div => {
    div.innerHTML = "";
}