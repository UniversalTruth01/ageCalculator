document.querySelector("#submit").addEventListener("click", function () {
    const update = function () {
        let dob = document.querySelector("#dob").value
        day = new Date(dob),
            time = day.getTime(),
            today = new Date(),
            timenow = today.getTime(),
            value = timenow - time,
            sec = Math.floor(value / 1000),
            min = Math.floor(value / (1000 * 60)),
            hour = Math.floor(value / (1000 * 60 * 60)),
            day = Math.floor(value / (1000 * 60 * 60 * 24)),
            week = Math.floor(value / (1000 * 60 * 60 * 24 * 7)),
            month = Math.floor(value / (1000 * 60 * 60 * 24 * 30.4375)),
            year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));

            let insert = function (x, y) {
                document.querySelector(x).innerHTML = y;
            }

            insert("#year", year + "-Years");
            insert("#month", month + "-Months");
            insert("#week", week + "-Weeks");
            insert("#day", day + "-Days");
            insert("#hour", hour + "-Hours");
            insert("#min", min + "-Minutes");
            insert("#sec", sec + "-Seconds");
    }

    setInterval(update, 1000);
})