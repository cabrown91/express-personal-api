console.log("Sanity Check: JS is working!");

var allShows = [];

$(document).ready(function(){

  $profile = $("#profile-list");

// your code
$.ajax({
  method: "GET",
  url: "/api/profile",
  success: onSuccess
});

function onSuccess(json) {
  var source   = $("#profile-template").html(),
      template = Handlebars.compile(source);

  var profileHtml = template({
   name: json.name,
   githubLink: json.githubLink,
   githubProfileImage: json.githubProfileImage,
   personalSiteLink: json.personalSiteLink,
   currentCity: json.currentCity
  });

  $profile.prepend(profileHtml);

}

$('#newShowForm').on('submit', function(e){
  e.preventDefault();
  console.log('new show serialized', $(this).serializeArray());
  $.ajax({
    method: 'POST',
    url: '/api/shows',
    data: $(this).serializeArray(),
    success: newShowSuccess,
    error: newShowError
  });
});

function newShowSuccess(json) {
  $('#newShowForm input').val('');
  allShows.push(json);
  render();
}

  $.ajax({
    method: "DELETE",
    url: "/api/shows/" + $(this).attr('data-id'),
    success: deleteShowSuccess,
    error: deleteShowError
  });

  function deleteShowSuccess(json) {
    var show = json;
    console.log(json);
    var showId = show._id;
    console.log("delete show", showId);

    for(i=0; i<show.length; i++) {
      if(show[i]._id === showId) {
        show.splice(i, 1);
        break;
      }
    }
    render();
  }

});
