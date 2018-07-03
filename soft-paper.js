const Paper = {
  split(content){
    const page = document.querySelector(content);
    const contentList = page.cloneNode(true).childNodes;
    page.innerHTML = ''; //Clear Page Content
    this._splitContent(page, contentList);
  },
  _splitContent(page, nodeList){
    nodeList.forEach((node) => {
      if(node.textContent){
        const texts = node.textContent.split('');
        this._splitText(page, texts);
      }
    });
  },
  _splitText(page, texts){
    const pageParent = page.parentNode;
    const fullTexts = texts.slice(0);
    for(let i = 0; i < texts.length; i++){
      const text = fullTexts.shift();
      page.innerHTML += text;

      //If overflowed, add text back and put it to next page
      if(this._isOverflowed(pageParent)){
        page.innerHTML = page.innerHTML.slice(0, -1);
        fullTexts.unshift(text);
        const newParent = pageParent.cloneNode(false);
        const newPage = page.cloneNode(false);
        pageParent.parentNode.appendChild(newParent);
        newParent.appendChild(newPage);
        this._splitText(newPage, fullTexts);
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

