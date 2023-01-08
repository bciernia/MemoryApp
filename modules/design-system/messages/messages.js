import {createH1, createParagraph} from "../core/core.js";

export const showMessage = (containerForMessage, messageHeader, messageContent) => {
    const h1 = createH1(messageHeader, ['centered-text']);
    const p = createParagraph(messageContent, ['centered-text']);

    containerForMessage.classList.toggle('flex-direction-col');
    containerForMessage.appendChild(h1);
    containerForMessage.appendChild(p);
}