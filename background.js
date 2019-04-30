//chrome.contextMenus.create({
  //  title: "Check text tone.",
    //id: 'parent',
    //contexts: ["selection"]
//});

    chrome.contextMenus.create({
        title: "Tone Analyzer",
        id: 'parent',
        contexts: ["selection"],
        onclick: callToneAnalyzer
    });




