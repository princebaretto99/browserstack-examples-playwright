const { bsLocal } = require('../../fixtures');
const { promisify } = require('util');
const sleep = promisify(setTimeout);

module.exports = async () => {
    let localStopped = false;

    if (bsLocal && bsLocal.isRunning()) {
        bsLocal.stop(() => {
            localStopped = true;
            console.log('Stopped BrowserStackLocal');
        });
        while (!localStopped) {
            await sleep(1000);
          }
    }
    
}