console.log("Sanity Check: JS is working!");

$(document).ready(function(){

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

});
