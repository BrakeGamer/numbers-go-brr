//Declaring variables

var counter = document.getElementById("number");
var upgradeNum = document.getElementById("cost");
var btn = document.getElementById("button1");
var counterTick = 1;
var counterTime = 1;
var counterVal = Number(counter.innerHTML);
var upgrade = 3;
//var colors = ["#d5ebd6", "#d5ebd6"]; //optional - add custom enabled and disabled color 


//JS version of sleep command, pauses code for given seconds
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

//Initializes the doc, async because it awaits sleep
async function init() {
    counter.innerHTML = 0;
    upgradeNum.innerHTML = upgrade;

    while (true) {
        tick();
        await sleep(counterTime * 1000);
    }
}

//Increases the number on the page every given unit of time by a given value
function tick() {
    counter.innerHTML = counterVal;

    validation();
    counterVal = counterVal + counterTick;
}

//Handles the button logic
function upgrades() {
    /*
    Make upgrade cost 160% of current number
    Increase speed by 0.1% every upgrade
    Add the value of the upgrade cost at every tick
    Increases tick by 1 every upgrade so lvl. 2 adds 2 per tick etc.
    */
    counterVal = counterVal - upgrade - 1;
    counter.innerHTML = counterVal;

    upgrade = Math.ceil(upgrade * 1.6);
    upgradeNum.innerHTML = upgrade;

    counterTick = counterTick + 1;
    counterTime = counterTime - 0.1;

    validation();

}

//Validator for the button disabling it if you can't buy an upgrade and vice versa
validation = () => {
    if (upgrade >= counterVal) {
        btn.disabled = true;
        //btn.style.backgroundColor = colors[0];
    } else {
        btn.disabled = false;
        //btn.style.backgroundColor = colors[1];
    }
}