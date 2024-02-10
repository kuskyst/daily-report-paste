const onClick = () => (_, tab) => chrome.tabs.sendMessage(tab.id, '');
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    title : 'Daily Report Paste',
    type : 'normal',
    contexts : ['all'],
    id: 'daily-report-paste',
    onclick : onClick()
  })
})
