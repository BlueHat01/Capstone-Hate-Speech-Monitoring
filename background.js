chrome.contextMenus.create({
    title: "Check text tone.",
    id: 'parent',
    contexts: ["selection"]
});


chrome.contextMenus.create({
    title: "Tone Analyzer",
    parentId: "parent",
    id: 'child6',
    contexts: ["selection"],
    onclick: callToneAnalyzer
});


