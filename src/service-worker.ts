// This handles and listens for browser events (e.g. remove bookmark, navigate to a new page).
// It can use all the Chrome APIs, but cannot interact directly with the content of web pages.

// content.js is called to populate the page with already saved highlights -> 
// key : word fragment; val : text associated

export interface Highlight {
    url: string;
    keytext : string;
    entrytext : string; 
};

// this listens to every event that content.js fires, when a highlight is added
// it stores the new information in a separate worker thread

export function initiateAddHighlight() {
    // take window.selected text (key), and trigger a popup to add associated data (value)
    // create a Highlight
    chrome.storage.sync.set({ string url : Highlight value}).then(() =>  {
        console.log("Sucessfully added highlight.");
        // trigger reload of page to refresh highlights and cause new highlight to show up?
    });
};