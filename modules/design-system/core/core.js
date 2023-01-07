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

export const createH1 = (text, additionalClasses = []) => {
    const h1= document.createElement('h1');

    h1.innerText = text;
    h1.classList.add(...additionalClasses);

    return h1;
};

export const createParagraph = (text, additionalClasses) => {
    const p = document.createElement('p');

    p.textContent = text;
    p.classList.add(...additionalClasses);

    return p;
}

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

export const switchClicking = element => {
    element.classList.toggle('prevent-clicking');
}