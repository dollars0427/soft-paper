const Paper = {
  split(container, content){
    const page = document.querySelector(container);
    let pageContent = document.querySelector(content);
    const contentList = pageContent.cloneNode(true).childNodes;
    pageContent.innerHTML = ''; //Clear Page Content

    this._splitContent(page, pageContent, contentList);
  },
  _splitContent(page, content, nodeList){
    nodeList.forEach((node) => {
      if(node.textContent){
        const texts = node.textContent.split('');
        this._splitText(page, content, texts);
      }
    });
  },
  _splitText(page, content, texts){
    const fullTexts = texts.slice(0);
    for(let i = 0; i < texts.length; i++){
      const text = fullTexts.shift();
      content.innerHTML += text;

      //If overflowed, add text back and put it to next page
      if(this._isOverflowed(page)){
        content.innerHTML = content.innerHTML.slice(0, -1);
        fullTexts.unshift(text);
        const newPage = page.cloneNode(false);
        const newPageContent = content.cloneNode(false);
        page.parentNode.appendChild(newPage);
        newPage.appendChild(newPageContent);
        this._splitText(newPage, newPageContent, fullTexts);
        break;
      }
    }
  },
  _isOverflowed(page){
    let isOverflow = false;
    if(page.scrollHeight > page.clientHeight){
      isOverflow = true;
    }
    return isOverflow;
  },
}

if (typeof window !== 'undefined') {
	window.SoftPaper = Paper;
}else{
  module.exports = Paper;
}
