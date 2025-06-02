const itemInput = document.querySelector(".itemInput"); 
const list = document.querySelector(".list");
const button = document.querySelector(".button")

function newMission() {
    if (itemInput.value === "") {
        return;
    } else {
        const mission = document.createElement("li");
        // mission.textContent = itemInput.value;
        mission.innerHTML = `
            <input type="checkbox" class="checkBox">
            <label>${itemInput.value}</label>
            <button class="rubbishBin">\u{1F5D1}</button>
        `
        const rubbishBin = mission.querySelector(".rubbishBin");
        const checkBox = mission.querySelector(".checkBox");


        rubbishBin.addEventListener("click", function() {
            mission.remove();
        });

        
        checkBox.addEventListener("change", function() {
            if (checkBox.checked){
                mission.style.textDecoration = "line-through";
                mission.style.color = "#999";
                list.append(mission);
            } else {
                mission.style.textDecoration = "none";
                mission.style.color = "";
                list.prepend(mission)
            }
        });
        
        list.append(mission);
        itemInput.value = "";
    }

}

itemInput.addEventListener("keyup",function(e) {
    if (e.key === "Enter") {
        newMission();
    }
})

button.addEventListener("click", newMission);

