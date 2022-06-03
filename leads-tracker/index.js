let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById('delete-btn')
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
const tabBtn = document.getElementById('save-tab-btn');


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
}

tabBtn.addEventListener('dblclick', () => {

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

        // inputEl.value = tabs[0].url;
        myLeads.push(tabs[0].url);

        localStorage.setItem("myLeads", JSON.stringify(myLeads));

        renderLeads(myLeads);
    });

})


function renderLeads(leadsArray) {
    let listItems = ""

    leadsArray.forEach((lead) => {

        listItems += `
            <li>
                <a target='_blank' href='${lead}'>
                    ${lead}
                </a>
            </li>
        `

    })
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // save the myleads array to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    renderLeads(myLeads);
})

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
})
