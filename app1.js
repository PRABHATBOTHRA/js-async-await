const button = document.querySelector("button");
const output = document.querySelector("p");

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("DONE");
    }, duration);
  });
  return promise;
};
/* function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (postData) => {
      setTimeout(() => {
        console.log(postData);
      }, 2000);
    },
    (error) => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log("TimeOut data");
  });
  console.log("Clicked!");
} */

/*  function with pormise */

const getPositions = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};
async function trackUserHandler() {
  let poisitionData;
  try {
    const posTimeer = await getPositions();
    poisitionData = posTimeer;
    setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(poisitionData);
  /* .then((posData) => {
      poisitionData = posData;
      return setTimer(2000);
    },err => console.log(err)) */
  // .then((data) => console.log(data, poisitionData));
  /* navigator.geolocation.getCurrentPosition(
    (postData) => {
     setTimer(2000).then((data) => {
       console.log(data,postData)
     })
    },
    (error) => {
      console.log(error);
    }
  ); */
  setTimeout(() => {
    console.log("TimeOut data");
  });
  console.log("Clicked!");

  /*  getPositions().then((posData) => {
    setTimer(2000).then((data) => {
      console.log(posData);
    });
  });*/
}

button.addEventListener("click", trackUserHandler);

/* let result = 0;

for (let i = 0; i < 499999990; i++) {
  result += i;
}
console.log(result);
 */
