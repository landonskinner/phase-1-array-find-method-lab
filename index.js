const superbowlWin = function (array) {
    if(array.find(item => item.result === "W") !== undefined)
    return array.find(item => item.result === "W").year;
}
