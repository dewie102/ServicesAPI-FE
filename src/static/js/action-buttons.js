const serviceIDs = ["Extrabot", "Extrabot-Discord"];

function createActionButtons(parentHTML) {
    var actionDiv = document.createElement("div");

    var start_button = document.createElement("button");
    start_button.classList = ["btn btn-primary"];
    start_button.textContent = "Start";
    start_button.addEventListener();

    var stop_button = document.createElement("button");
    stop_button.classList = ["btn btn-danger"];
    stop_button.textContent = "Stop";

    var restart_button = document.createElement("button");
    restart_button.classList = ["btn btn-warning"];
    restart_button.textContent = "Restart";

    actionDiv.appendChild(start_button);
    actionDiv.appendChild(stop_button);
    actionDiv.appendChild(restart_button);

    parentHTML.appendChild(actionDiv);
}

serviceIDs.forEach((id) => {
    var serviceAction = document
        .getElementById(id)
        .getElementsByClassName("Actions")[0];

    createActionButtons(serviceAction);
});
