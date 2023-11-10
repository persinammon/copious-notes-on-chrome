# copious-notes-extension
I did not find an equivalent extension, so I made it.
A Chrome extension for adding private notes to a GitHub repository.

## Notes

- Similar to how Jupyter GRAFITTI allows for in-line voice messages on Jupyter notebooks.
- Chrome extensions run in a separate, sandboxed execution environment and interact with the Chrome browser. They "extend" the browser by using APIs to modify browser behavior and access web content (excerpted from [here](https://betterprogramming.pub/creating-chrome-extensions-with-typescript-914873467b65)).
- An optional manifest key used to specify a javascript file as the extension service worker. A service worker is a background script that acts as the extension's main event handler. For more information, visit the more comprehensive introduction to service workers...Extension service workers are an extension's central event handler...An extension service worker is loaded when it is needed, and unloaded when it goes dormant. Once loaded, an extension service worker generally runs as long as it is actively receiving events, though it can shut down. Like its web counterpart, an extension service worker cannot access the DOM, though you can use it if needed with offscreen documents. [Source](https://developer.chrome.com/docs/extensions/mv3/manifest/background/)


## TypeScript

I experimented with using [TypeScript](https://www.w3schools.com/typescript/typescript_intro.php) for the first time. Google Developer documentation does not have examples with TypeScript (all their examples [here](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main)), but they do offer the package `@types/chrome` to developers willing to try it. I used a tutorial on Medium to set up a workflow, with the final extension code being exported to the `dist` folder.

I am not sure if it was worth the overhead of changing the file directory in an unintuitive way and dealing with `npm`,
but I like the idea of always using TypeScript as a best practice.

Instructions to Install:

- Install Node.js and npm, check installation with `node -v && npm -v`.
- Run `npm init -y`.
- Install required dependencies under the `--save-dev` flag. `--save-dev` saves packages under `devDependencies` in `package.json`, so the packages are not installed in production environment (keep build minimal).

```
npm install --save-dev webpack webpack-cli &&
npm install --save-dev copy-webpack-plugin &&
npm install --save-dev typescript ts-loader &&
npm install --save-dev @types/chrome
```
- Do extra setup detailed [here](https://betterprogramming.pub/creating-chrome-extensions-with-typescript-914873467b65).

The end workflow is run `npm run build` from the root of the project, go to `chrome://extensions` with Developer Mode activated,
Load unpacked the `dist` folder, pin the new extension to the Chrome toolbar, and use the refresh and errors buttons of the extension
on the `chrome://extensions` page for development. Remember, do not touch the files in `dist` folder. Any changes will be overwritten after every build script run, make all changes in the `public` folder.

Super credits to the Medium article, very cool.

# Functionality

- User highlights text -> either in the right click window or right away a button by mouse appears with tag "Annotate text block/code section." -> Click "Annotate..." -> Pop up with text box appears where can write notes (in markdown?) -> Click save on bottom right of that text box. -> key-value of that location/set of words on that page to the user made notes is saved to dictionary per page.
- Where user previously saved note, the text is highlighted. 
- User goes to a page, and goes to the tab where can see all notes for the page and can access directly.
- When on search page, the tab shows all pages that have highlights on them.

- Download data to export for others to view (no real-time collaboration feature).
- In general can use service worker to listen to events and save state (e.g. navigating to a new page, removing a bookmark, or closing a tab). It can use all Chrome APIs but only content scripts can directly interact with web page content. It is unnecessary for this extension.

## Sources

https://betterprogramming.pub/creating-chrome-extensions-with-typescript-914873467b65
https://github.com/GoogleChrome/chrome-extensions-samples/tree/main
