console.log("Sanity Check: JS is working!");
  var $shows;
  var allShows = [];

$(document).ready(function(){

  $shows = $('#showsTarget');

  var source = $("#shows-template").html(),
      template = Handlebars.compile(source);

// your code
$.ajax({
  method: "GET",
  url: "/api/profile",
  success: onSuccess
});

function onSuccess(json) {
  var source   = $("#profile-template").html(),
      template = Handlebars.compile(source),
      $profile = $("#profile-list");

  var profileHtml = template({
   name: json.name,
   githubLink: json.githubLink,
   githubProfileImage: json.githubProfileImage,
   personalSiteLink: json.personalSiteLink,
   currentCity: json.currentCity
  });

  $profile.prepend(profileHtml);

}

$.ajax({
  method: "GET",
  url: "/api/shows",
  success: showsSuccess,
  error: showsError
});


$('#newShowForm').on('submit', function(e){
  e.preventDefault();
  $.ajax({
    method: 'POST',
    url: '/api/shows',
    data: $(this).serialize(),
    success: newShowSuccess,
    error: newShowError
  });
});

$shows.on('click', '.delete-btn', function(){
  $.ajax({
    method: "DELETE",
    url: "/api/shows/" + $(this).attr('data-id'),
    success: deleteShowSuccess,
    error: deleteShowError
  });
});

  function render() {
    $shows.empty();

    var showsHtml = template({ shows: allShows });

    $shows.append(showsHtml);
  }





function showsSuccess(json) {
  allShows = json;
  render();
}

function showsError(error) {
  console.log("error", error);
  $('#showsTarget').text('Failed to load shows. Is the server working?');
}

function newShowSuccess(json) {
  $('input').val('');
  allShows.push(json);
  render();
}

function newShowError(error) {
  console.log("Failed to create show", error);
}


function deleteShowSuccess(json) {
  var show = json;
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

function deleteShowError(err) {
  console.log("Failed to delete show", err);
}






});
