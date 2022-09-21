import { makeDelay, loggerForThen } from "./utils.mjs";

//#region check result of function without await
// const functionWithoutAwait = async () => {
//     console.log(new Date());

//     makeDelay(2000);
// }

// console.log(new Date(), functionWithoutAwait().then(loggerForThen));
//#endregion


//#region check result of function with await
// const functionWithAwait = async () => {
//     console.log(new Date());

//     await makeDelay(2000);
// }

// console.log(new Date(), functionWithAwait().then(loggerForThen));
//#endregion
