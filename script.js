const inputBtn= document.querySelector("#input-btn")
const inputEl= document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
let myLeads = []
pullLeadsLocalStorage()

//alows submission of leads

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
    displayLeads()
})
//handles displaying the links to the page

function displayLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
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

    inputEl.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        inputBtn.click();

    }
});

 function pullLeadsLocalStorage() {
    let leadstorage = JSON.parse(localStorage.getItem("myLeads"))
    if (leadstorage !== null)
        myLeads = leadstorage
        displayLeads()
 }