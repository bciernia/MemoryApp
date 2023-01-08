export const createFileArray = (filesDirectory, filesExtension) => {
    const fileArray = [];

    for(let i=1;i<9;i++){
        fileArray.push(`${filesDirectory}${i}.${filesExtension}`);
    }

    return fileArray
}
