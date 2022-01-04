const inputBtn= document.querySelector("#input-btn")
const inputEl= document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
let myLeads = []

//alows submission

inputBtn.addEventListener("click", function () {
    let activelead = inputEl.value
    myLeads.push(activelead)
    inputEl.value = ""
    displayLeads()
})
//handles displaying the links to the page

function displayLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
    // listItems  += "<li><a href='" +myLeads[i] + "' target=_blank>" + myLeads[i] + "</a></li>"
    listItems  += `
    <li>
        <a href='${myLeads[i]} target='_blank'> 
            ${myLeads[i]} 
        </a>
    </li>
    `
    }
    ulEl.innerHTML = listItems
}
// presses the submit button when enter is pressed

// function enterSubmit(event) {
//     event.preventDefault();
//     if (event.keycode === 13) {
//         console.log("this is fine")
//         inputBtn.click();
//     }
// }

    inputEl.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        inputBtn.click();

    }
});
