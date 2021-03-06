(function(exports){
  function ViewAllStories(dataInput){
    this.data = dataInput;
  };

  ViewAllStories.prototype.convertDataToHtml = function(){
    html = '<ul id="list">'
    for(var i = 0; i < this.data.length; i++){
      var story = this.data[i];
      html += "<li><h3>" + story.webTitle + "</h3><a href = " + story.webUrl + ">Click here to go to article</a></li>";
    }
    return html += "</ul>";
  };


  exports.ViewAllStories = ViewAllStories;
})(this);
