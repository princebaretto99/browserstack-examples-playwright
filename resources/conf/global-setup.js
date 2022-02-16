const { bsLocal, BS_LOCAL_ARGS } = require('../../fixtures');
const { promisify } = require('util');
const sleep = promisify(setTimeout);

module.exports = async () => {
    console.log("Setting Up Local Connection...");
    let localResponseReceived = false;
    bsLocal.start(BS_LOCAL_ARGS, (err)=>{
        if(err) {
            console.log(err);
        }else{
            console.log("BrowserStack Local is Started");
        }
        localResponseReceived = true;
    })
    while (!localResponseReceived) {
        // await sleep(1000);
        console.log("Waiting..");
      }
  };
  