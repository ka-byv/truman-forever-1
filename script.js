let yesVotes = 0;
let noVotes = 0;

const yesButton = document.querySelector(".poll-button:nth-child(1)");
const noButton = document.querySelector(".poll-button:nth-child(2)");
const result = document.querySelector(".poll-result");

yesButton.addEventListener("click", function () {
    yesVotes++;
    updateResults();
});

noButton.addEventListener("click", function () {
    noVotes++;
    updateResults();
});

function updateResults() {

    const totalVotes = yesVotes + noVotes;

    const yesPercentage = Math.round((yesVotes / totalVotes) * 100);
    const noPercentage = Math.round((noVotes / totalVotes) * 100);

    result.innerHTML =
        "YES: " + yesPercentage + "% &nbsp;&nbsp; | &nbsp;&nbsp;" +
        "NO: " + noPercentage + "%" +
        "<br><br>" +
        totalVotes + " vote(s)";
}
