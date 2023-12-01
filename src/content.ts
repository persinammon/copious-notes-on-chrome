// // content.js is called to populate the page with already saved highlights -> 
// // key : word fragment; val : text associated
// // if key not found, does not populate and creates message that highlight is outdated
// //
// // it also changes the browser context menu (right click menu) to allow for the action of adding higlights
// // this is a statically declared script through manifest.json, as it should be done for every page

// // "contextMenus", // add action item in 'right click' browser context menu - necessary
// //chrome.contextMenus.onClicked.addListener(initiateAddHighlight);

interface Highlight {
    keytext : string;
    entrytext : string; 
}


// // capture url of current page
// chrome.storage.sync.get([url : string]).then((result) => {
//     // result is a dictionary of text fragments to higlight text
//     // higlight all text fragments
//     //console.log("Value currently is " + result.key);
// });
  
// // "permissions": [
// //     "extensionTypes", //unsure about this
// //     "types", //unsure about this
// //   ],
// // ```
