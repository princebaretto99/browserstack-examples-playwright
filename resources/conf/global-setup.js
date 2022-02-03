const { bsLocal, BS_LOCAL_ARGS } = require('../../fixtures');

module.exports = async () => {

    bsLocal.start(BS_LOCAL_ARGS, (err)=>{
        if(err) {
            console.log(err);
        }else{
            console.log("BrowserStack Local is Started");
        }
    })
  };
  