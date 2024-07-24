"use strict";
// loading >>>
$("document").ready(() => {
  $(".loading").fadeOut(2000, () => {
    $("body").css("overflow", "auto");
  });

  const savedMode = localStorage.getItem("themeMode");
  if (savedMode) {
    $("body").attr("data-bs-theme", savedMode);
    $("#theme span").text(`Theme: ${savedMode.charAt(0).toUpperCase() + savedMode.slice(1)}`);
  }

  // Toggle theme mode >>>
  $("#theme").on('click',() => {
    const currentMode = $("body").attr("data-bs-theme");
    const newMode = currentMode === "dark" ? "light" : "dark";
    $("body").attr("data-bs-theme", newMode);
    $("#theme span").text(`Theme: ${newMode.charAt(0).toUpperCase() + newMode.slice(1)}`);

    // Save the updated theme mode to localStorage >>>
    localStorage.setItem("themeMode", newMode);
  });
 
 
 $(".side-nav i").on('click',() => {
  let left = $(".side-nav-inner").innerWidth();
  if ($(".side-nav").css("left") === "0px") {
    $(".side-nav").css("left", -left);
  } else {
    $(".side-nav").css("left", 0); 
  }
});
$(".side-nav").css("left", -$(".side-nav-inner").innerWidth());


});

$("#singers p").slideUp();
$("#singers h3").on('click', function () {
  $("#singers p").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});


  let countDownDate = new Date("Dec 31 2024 23:59:59").getTime();
  let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDeff = countDownDate - dateNow;
  let days = Math.floor(dateDeff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDeff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDeff % (1000 * 60)) / 1000);

  $("#duration .days p").text(days);
  $("#duration .hours p").text(hours);
  $("#duration .minutes p").text(minutes);
  $("#duration .seconds p").text(seconds);
  }, 1000);

$("textarea").keyup(function () {
  let length = $(this).val().length;
  let remin = 100 - length;
  if (remin <= 0) {
    $("#contact form p span").text("your available character finished");
  } else {
    $("#contact form p span").text(`${remin} Character Reamining`);
  }
});