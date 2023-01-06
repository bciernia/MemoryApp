export const createFileArray = () => {
    const fileArray = [];

    for(let i=1;i<9;i++){
        fileArray.push(`images/memory_images/${i}.jpg`);
    }

    return fileArray
}
