//--------------Call_Stack----------
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();

//--------------CallBack Hell------------

h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("green", 1000, () => {
        changeColor("orange", 1000, () => {
            changeColor("blue", 1000, () => {
                changeColor("purple", 1000, () => {
                    changeColor("cyan", 1000, () => {

                    });
                });
            });
        });
    });
});

//callBacks nesting -> callback Hell

// ---Similarly

function SaveToDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

//-- callBack Hell
SaveToDb(
    "apna college",
    () => {
        console.log("success: your data is saved");
        SaveToDb(
            "salam",
            () => {
                console.log("success2: your data is saved");
                SaveToDb(
                    "peace",
                    () => {
                        console.log("success3: your data is saved");
                    },
                    () => {
                        console.log("failure: weak connection. data not saved");
                    }
                );
            },
            () => {
                console.log("failure: weak connection. data not saved");
            }
        );
    },
    () => {
        console.log("failure: weak connection. data not saved");
    }
);

//----------------Promises--------------

function SaveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data was saved");
        } else {
            reject("failure: weak connection");
        }
    });
}

SaveToDb("apna college")
    .then(() => {
        console.log("promise was resolved");
    })
    .catch(() => {
        console.log("promise was rejected");
    });

//---Promise Chaining (multiple promise)---

SaveToDb("apna college")
    .then(() => {
        console.log("data1 saved.");
        return SaveToDb("shradha")
    })
    .then(() => {
        console.log("data2 saved.");
        return SaveToDb("hello world")
    })
    .then(() => {
        console.log("data3 saved.");
    })
    .catch(() => {
        console.log("promise was rejected");
    });

//---Result & Errors in Promises

SaveToDb("apna college")
    .then((result) => {
        console.log("data1 saved.");
        console.log("result of promise: ",result);
        return SaveToDb("shradha")
    })
    .then((result) => {
        console.log("data2 saved.");
        console.log("result of promise: ",result);
        return SaveToDb("hello world")
    })
    .then((result) => {
        console.log("data3 saved.");
        console.log("result of promise: ",result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log("error of promise: ", error);
    });

//---Refactoring Old Code(Change Color)---

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

changeColor("red", 1000)
    .then(() => {
        console.log("red color was completed");
        return changeColor("orange", 1000)
    })
    .then(() => {
        console.log("orange color was completed");
        return changeColor("purple", 1000)
    })
    .then(() => {
        console.log("purple color was completed");
        return changeColor("blue", 1000)
    })
    .then(() => {
        console.log("blue color was completed");
        return changeColor("cyan", 1000)
    })
    .then(() => {
        console.log("cyan color was completed");
    });