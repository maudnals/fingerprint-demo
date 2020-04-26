import Fingerprint2 from "fingerprintjs2";

const TIMEOUT_MS = 500;

function logHash() {
    Fingerprint2.get(function (components) {
        const values = components.map(function (component) { return component.value })
        // create a hash fingerprint via murmur hash function
        const hash = Fingerprint2.x64hash128(values.join(''), 31)
        console.log("fingerprinting hash:", hash);
    });
}

if (window.requestIdleCallback) {
    requestIdleCallback(function () {
        logHash();
    })
  
} else {
    setTimeout(function () {
      logHash();
    }, TIMEOUT_MS)
}
