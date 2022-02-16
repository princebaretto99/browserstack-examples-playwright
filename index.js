
const BrowserStackLocal = require('browserstack-local');
var bs_local = new BrowserStackLocal.Local();
var BS_LOCAL_ARGS = {
    key: process.env.BROWSERSTACK_ACCESS_KEY 
  };

  console.log(BS_LOCAL_ARGS);

  async function start(){
    await new Promise(r => bs_local.start(BS_LOCAL_ARGS,r))
  console.log("Started and stopping"+ bs_local.isRunning());
  await new Promise(r => bs_local.stop(r))
  }

  start();

  

//   bs_local.start(BS_LOCAL_ARGS, function() {
//     console.log('Started BrowserStackLocal');
  
//     // Check if BrowserStack local instance is running
//     console.log('BrowserStackLocal running:', bs_local.isRunning());
  
//     // Your test code goes here, from creating the driver instance till the end, i.e. driver.quit
  
//     // Stop the Local instance after your test run is completed, i.e after driver.quit
//     bs_local.stop(function() {
//       console.log('Stopped BrowserStackLocal');
//     });
//   });