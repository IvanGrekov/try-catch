//#region catch isn't required, we can use finally instead
// try {
//     console.log('try');
// } finally {
//     console.log('finally');
// }
//#endregion


//#region finally if there is no catch and we have an exception in try
// try {
//     throw 'exception';
// } finally {
//     console.log('finally');
// }
//#endregion


//#region finally if there is catch and we have an exception in try
// try {
//     throw 'exception';
// } catch(e) {
//     console.log('catch', e);
// } finally {
//     console.log('finally');
// }
//#endregion


//#region return from finally if there is return from try
// const f = () => {
//     try {
//         return 'try';
//     } finally {
//         return 'finally';
//     }
// }

// console.log(f());
//#endregion


//#region return from finally if there is return from catch
// const f = () => {
//     try {
//         throw 'try';
//     } catch {
//         return 'catch';
//     } finally {
//         return 'finally';
//     }
// }

// console.log(f());
//#endregion


//#region nested try/catch
// try {
//     try {
//         throw 'exception from inner try';
//     } finally {
//         console.log('inner finally');
//     }
// } catch (e) {
//     console.log('outer catch:', e);
// }

// try {
//     try {
//         throw 'exception from inner try';
//     } catch (e) {
//         console.log('inner catch:', e);
//     } finally {
//         console.log('inner finally');
//     }
// } catch (e) {
//     console.log('outer catch:', e);
// }

// try {
//     try {
//       throw new Error('exception from inner try');
//     } catch (ex) {
//       console.error('inner catch:', ex.message);

//       throw ex;
//     } finally {
//       console.log('finally');
//     }
//   } catch (ex) {
//     console.error('outer catch:', ex.message);
//   }
//#endregion


//#region nested try/catch with return from inner finally
// (() => {
//     try {
//       try {
//         throw new Error('exception from inner try');
//       } catch (ex) {
//         console.error('inner catch:', ex.message);

//         throw ex;
//       } finally {
//         console.log('finally');

//         return;
//       }
//     } catch (ex) {
//       console.error('outer catch:', ex.message);
//     }
//   })();
//#endregion