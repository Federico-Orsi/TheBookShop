let promesa = true;

export const customPromise = (time, devolverArray) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (promesa) {
                resolve(devolverArray);
            } else {
                reject("Error in the customPromise :(");
            }
        }, time);
    });
}


// export default customPromise;
