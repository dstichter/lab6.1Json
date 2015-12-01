$(document).ready(function(){
  function create(twitterData){
    var colDiv = $('<div>').addClass('col-md-3');
    var userImg = $('<img>').attr('src', twitterData.user.profile_image_url);
    var userName = $('<h4>').append(twitterData.user.name)
    var location = $('<h4>').append(twitterData.user.location)
    var userText = $('<div>').append(twitterData.text)
    var date = $('<p>').append(twitterData.user.created_at)
    var followers = $('<p>').append(twitterData.followers_count)

    colDiv.append(userName)
          .append(userImg)
          .append(location)
          .append(date)
          .append(followers)
          .append(userText);
    $('.row').append(colDiv);
  }
  for(i=0;i<window.jsonData.length;i++){
    create(window.jsonData[i]);
  }

});