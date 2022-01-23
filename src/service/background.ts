function main() {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ hello: 'world!' })
    console.log('set!!')
  })
}

main()
