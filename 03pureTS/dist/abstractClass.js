"use strict";
class TakePhoto {
    constructor(camaraMode, filter) {
        this.camaraMode = camaraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(camaraMode, filter, burst) {
        super(camaraMode, filter);
        this.camaraMode = camaraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getHello() {
        console.log("Hello, world");
    }
}
const nc = new Instagram("test", "test", 43);
nc.getHello();
