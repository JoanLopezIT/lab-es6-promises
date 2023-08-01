// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
//  getInstruction("mashedPotatoes", 0, (step1) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//  }, (error) => console.log(error));

//  getInstruction("mashedPotatoes", 1, (step2) => {
//  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//  }, (error) => console.log(error));

//  getInstruction("mashedPotatoes", 2, (step3) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//  }, (error) => console.log(error));

//  getInstruction("mashedPotatoes", 3, (step4) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//  }, (error) => console.log(error));

//  getInstruction("mashedPotatoes", 4, (step5) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//  }, (error) => console.log(error));



// Iteration 1 - using callbacks

getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          getInstruction("mashedPotatoes", 4, () => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
            getInstruction("mashedPotatoes", 4, () => {
              document.querySelector("#mashedPotatoesImg").removeAttribute("hidden") 


          }, (err) => console.log(err));
        }, (err) => console.log(err));
      }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));
}, (err) => console.log(err));
}, (err) => console.log(err));



// ...

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7)
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return obtainInstruction('steak', 7)
  })
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
  })
  .finally(() => {
    document.querySelector("#steakImg").removeAttribute("hidden")
  })




// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    let myBroccoli = await obtainInstruction('broccoli',0)
    document.querySelector("#broccoli").innerHTML += `<li>${myBroccoli}</li>`

    myBroccoli = await obtainInstruction('broccoli',1)
    document.querySelector("#broccoli").innerHTML += `<li>${myBroccoli}</li>`

    myBroccoli = await obtainInstruction('broccoli',2)
    document.querySelector("#broccoli").innerHTML += `<li>${myBroccoli}</li>`

    myBroccoli = await obtainInstruction('broccoli',3)
    document.querySelector("#broccoli").innerHTML += `<li>${myBroccoli}</li>`

    myBroccoli = await obtainInstruction('broccoli',4)
    document.querySelector("#broccoli").innerHTML += `<li>${myBroccoli}</li>`

    myBroccoli = await obtainInstruction('broccoli',5)
    document.querySelector("#broccoli").innerHTML += `<li>${myBroccoli}</li>`

    myBroccoli = await obtainInstruction('broccoli',6)
    document.querySelector("#broccoli").innerHTML += `<li>${myBroccoli}</li>`

    myBroccoli = await obtainInstruction('broccoli',6)
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`

    myBroccoli = await obtainInstruction('broccoli',6)
    document.querySelector("#broccoliImg").removeAttribute("hidden")
  }
  catch (error) {
    console.log(error)
  }
}
makeBroccoli()
// Bonus 2 - Promise all
async function brussels() {
try {
  const data0 = await obtainInstruction("brusselsSprouts", 0);
  const data1 = await obtainInstruction("brusselsSprouts", 1);
  const data2 = await obtainInstruction("brusselsSprouts", 2);
  const data3 = await obtainInstruction("brusselsSprouts", 3);
  const data4 = await obtainInstruction("brusselsSprouts", 4);
  const data5 = await obtainInstruction("brusselsSprouts", 5);
  const data6 = await obtainInstruction("brusselsSprouts", 6);
  const data7 = await obtainInstruction("brusselsSprouts", 7);
  Promise.all([data0, data1, data2, data3, data4, data5, data6, data7]).then(
    (values) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${values[0]}</li>`;
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${values[1]}</li>`;
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${values[2]}</li>`;
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${values[3]}</li>`;
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${values[4]}</li>`;
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${values[5]}</li>`;
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${values[6]}</li>`;
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${values[7]}</li>`;
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    }
  );
} catch (error) {
  console.log(error);
}
}
brussels();