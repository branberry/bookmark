const CONTEXT_MENU_ID = 'BOOKMARK_CONTEXT_ID'

function createContextMenu() {
  chrome.contextMenus.create({
    id: CONTEXT_MENU_ID,
    title: 'Search bookmark',
    contexts: ['selection', 'page'],
  })

  chrome.contextMenus.onClicked.addListener((info) => {
    console.log(JSON.stringify(info, null, 2))
  })
}

function main() {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ hello: 'world!' })
    console.log('set!!')
    createContextMenu()
  })
}

main()
