$(
  (loadFunction = () => {
    const aboutMeToggle = $("#about-me-toggle");
    const aboutMe = $("#about-me");

    toggleIcon = () => {
      const plusSign = "public/assets/icons/plus.png";
      const minusSign = "public/assets/icons/minus.png";

      if (aboutMe.is(":visible")) {
        aboutMeToggle.attr("src", minusSign);
      } else {
        aboutMeToggle.attr("src", plusSign);
      }
    };

    toggleAboutMe = () => {
      if (aboutMe.is(":visible")) {
        aboutMe.hide();
      } else {
        aboutMe.fadeIn(400);
        window.location.href = "#name";
      }

      toggleIcon();
    };

    $(document).on("click", "img#about-me-toggle", toggleAboutMe);
  })
);
