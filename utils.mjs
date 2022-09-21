export const makeDelay = (miliseconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('executed');
        }, miliseconds)
    })
}

export const loggerForThen = (data) => {
    console.table({
        time: new Date(),
        data,
    });
}
