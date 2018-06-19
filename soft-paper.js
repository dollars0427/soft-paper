const Paper = {
  split(container, target){
    const paper = container;
    const paperContent = paper.innerHTML;
    const paperHeight = paper.scrollHeight;

    if(paper.scrollHeight > paper.innerHeight){
      console.log('Overflowed');
    }
    //const paperSize = paperContent.length / paperHeight;
  }
}

if (typeof window !== 'undefined') {
	window.SoftPaper = Paper;
}else{
  export default Paper;
}
