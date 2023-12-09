import { Highlight, initiateAddHighlight } from "./service-worker.js";
// ECMAScript modules (ESM)

// content.js is called to populate the page with already saved highlights -> 
// key : word fragment; val : text associated, and all associated edge cases
// this is a statically declared script through manifest.json, as it should be done for every page



// "contextMenus", // add action item in 'right click' browser context menu - necessary
// should this listener move the work to the service worker, and how to do that 
chrome.contextMenus.onClicked.addListener(initiateAddHighlight);


// // capture url of current page
chrome.storage.sync.get([url : string]).then((Array<Highlight> result) => {
    // for loop populating page with highlights - if key not found, console.log("Highlight key not found")
    console.log("Highlights successfully added.");
});
  
