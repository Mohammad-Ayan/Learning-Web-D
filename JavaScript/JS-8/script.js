////--------------Call_Stack----------
// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

////--------------CallBack Hell------------

// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("orange", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 changeColor("purple", 1000, () => {
//                     changeColor("cyan", 1000, () => {

//                     });
//                 });
//             });
//         });
//     });
// });

////callBacks nesting -> callback Hell

//// ---Similarly

// function SaveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

////-- callBack Hell
// SaveToDb(
//     "apna college",
//     () => {
//         console.log("success: your data is saved");
//         SaveToDb(
//             "salam",
//             () => {
//                 console.log("success2: your data is saved");
//                 SaveToDb(
//                     "peace",
//                     () => {
//                         console.log("success3: your data is saved");
//                     },
//                     () => {
//                         console.log("failure: weak connection. data not saved");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure: weak connection. data not saved");
//             }
//         );
//     },
//     () => {
//         console.log("failure: weak connection. data not saved");
//     }
// );

////----------------Promises--------------

function SaveToDb(data) {
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            success("success: data was saved");
        } else {
            failure("failure: weak connection");
        }
    });
  
}

SaveToDb("apna college");