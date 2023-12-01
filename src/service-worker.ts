// This handles and listens for browser events (e.g. remove bookmark, navigate to a new page).
// It can use all the Chrome APIs, but cannot interact directly with the content of web pages.

// content.js is called to populate the page with already saved highlights -> 
// key : word fragment; val : text associated
// if key not found, does not populate and creates message that highlight is outdated
// this is a statically declared script through manifest.json, as it should be done for every page

// Browser event that user highlights text ->  (this is an action)
// either in the right click window or right away a button by mouse appears with tag "Annotate text block/code section." -> (this
// was done in the content.js)
// Click "Annotate..." -> (this is an action)
// Pop up with text box appears where can write notes (in markdown?) ->
// Click save on bottom right of that text box. -> 
// key-value of that location/set of words on that page to the user made notes is saved to dictionary per page
// refresh or somehow show new higlight immediately

// allow for edits
// chrome.storage.sync.set({ key: value }).then(() => {
//     console.log("Value is set");
//   });
  
// refresh or somehow see new higlight immediately

