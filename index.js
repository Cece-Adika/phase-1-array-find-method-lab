function superbowlWin(record) {
    const win = record.find(entry => entry.result === "W");
    if (win) {
        return win.year;
    } else {
        return undefined; // If no win object is found
    }
}

