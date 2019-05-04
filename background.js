chrome.contextMenus.create({
   title: "Check text tone.",
    id: 'parent',
    contexts: ["selection"]
});

    chrome.contextMenus.create({
        title: "Tone Analyzer",
        parentId: 'parent',
        id: 'child6',
        contexts: ["selection"],
        onclick: callToneAnalyzer
    });

    chrome.contextMenus.create({
    title: "Highlight",
    parentId: "parent",
    id: 'child7',
    contexts: ["selection"],
    onclick: highlightSelect
});




