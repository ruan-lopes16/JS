const scheduleCombiner = (...args) => {

    const scheduleCombined = args.join(" - ")

    return scheduleCombined
}


console.log(scheduleCombiner("15:23", "09:01", "13:10", "12:40"))