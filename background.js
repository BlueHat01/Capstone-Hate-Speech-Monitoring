chrome.contextMenus.create({
    title: "IBM Watson API V1",
    id: 'parent',
    contexts: ["selection"]
});

chrome.contextMenus.create({
    title: "Translate to Spanish",
    parentId: "parent",
    id: "child1",
    contexts: ["selection"],
    onclick: generalTranslator
});

chrome.contextMenus.create({
    title: "Translate to Arabic",
    parentId: "parent",
    id: "child2",
    contexts: ["selection"],
    onclick: generalTranslator
});

chrome.contextMenus.create({
    title: "Translate to French",
    parentId: "parent",
    id: 'child3',
    contexts: ["selection"],
    onclick: generalTranslator
});

chrome.contextMenus.create({
    title: "Translate to Portugese",
    parentId: "parent",
    id: 'child4',
    contexts: ["selection"],
    onclick: generalTranslator
});

chrome.contextMenus.create({
    title: "Translate to German",
    parentId: "parent",
    id: 'child5',
    contexts: ["selection"],
    onclick: generalTranslator
});

chrome.contextMenus.create({
    title: "Tone Analyzer",
    parentId: "parent",
    id: 'child6',
    contexts: ["selection"],
    onclick: callToneAnalyzer
});


