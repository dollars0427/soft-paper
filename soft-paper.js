const Paper = {
  split(container, target){
    const paper = document.querySelector(container);
    const paperContent = document.querySelector('.paper-content');
    const nodeList = Array.from(paperContent.childNodes);
    this._splitContent(paper, nodeList);
  },
  _splitContent(paper, nodeList){
    if(!paper.scrollHeight > paper.offsetHeight){
      for(let i = 0; i < nodeList.length; i++){
        const node = nodeList.pop();
        console.log(node);
        paper.appendChild(node);
      }
    }else{
      const newPage = paper.cloneNode(false);
      this._splitContent(newPage, nodeList);
    }
  }
}

if (typeof window !== 'undefined') {
	window.SoftPaper = Paper;
}else{
  module.exports = Paper;
}
