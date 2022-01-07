const inputBtn= document.querySelector("#input-btn")
const inputEl= document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const delBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")
let myLeads = []
pullLeadsLocalStorage()

//alows submission of lead manually

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
    display(myLeads)
})

//saves url of current tab
tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    display(myLeads)
})

})

//clears all entries from page
delBtn.addEventListener("dblclick", function() {
    console.log("double clicked")
    localStorage.clear()
    myLeads = []
    display(myLeads)

} )
//handles displaying the links to the page

function display(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
    listItems  += `
    <li>  
        <a href='${leads[i]} target='_blank'> 
            ${leads[i]} 
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
        inputBtn.click()

    }
})

 function pullLeadsLocalStorage() {
    const leadstorage = JSON.parse(localStorage.getItem("myLeads"))
    if (leadstorage) {
        myLeads = leadstorage
        display(myLeads)
    }}