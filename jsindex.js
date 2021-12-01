const hen = {
    name : "Helen",
    eggCount: 0,
    layAnEgg(){
        this.eggCount += 1;
        console.log("EGG")
    }
}
hen.eggCount;
hen.layAnEgg();
hen.layAnEgg();
hen.eggCount;