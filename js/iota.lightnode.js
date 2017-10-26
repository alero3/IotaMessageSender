var localInterruptAttachingToTangle = function(callback) {
    console.log("Light Wallet: localInterruptAttachingToTangle");

    ccurl.ccurlInterrupt(connection.ccurlProvider);

    if (callback) {
      return callback();
    }
}
var localAttachToTangle = function(trunkTransaction, branchTransaction, minWeightMagnitude, trytes, callback) {
    console.log("Light Node Leaderboard: localAttachToTangle");

    ccurl.ccurlHashing(connection.ccurlProvider, trunkTransaction, branchTransaction, minWeightMagnitude, trytes, function(error, success) {
        console.log("Light Node Leaderboard: ccurl.ccurlHashing finished:");
        if (error) {
            console.log(error);
        } else {
            console.log(success);
        }
        if (callback) {
            return callback(error, success);
        } else {
            return success;
        }
    })
}

iota.api.attachToTangle = localAttachToTangle;
iota.api.interruptAttachingToTangle = localInterruptAttachingToTangle;

