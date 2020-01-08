
'use strict'
const imgArr = [];

function Image (imgObj){
  this.url = imgObj.image_url
  this.title = imgObj.title
  this.description = imgObj.description
  this.keyword = imgObj.keyword
  this.horns = imgObj.horns

  imgArr.push(this);
}

Image.prototype.render = function (){
//make a template
  const myTemplate = $('#photo-template').html();
  //make a new section
  const $newSection = $('<section></section>'); {
    //put the HTML into my the section
    $newSection.html(myTemplate);
    //fill the section
    $newSection.find('h2').text(this.name);
    //find img and fill the src & alt
    $newSection.find('img').attr('src', this.url);
    $newSection.find('img').attr('alt', this.title)
    $newSection.find('p').text(this.description);
  }
  $('main').append($newSection);
}


$.get('/data/page-1.json', data => {
  data.forEach(displayImg => {
    let image = new Image (displayImg);
    image.render();
  })
})


