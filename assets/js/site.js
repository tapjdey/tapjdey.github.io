(function () {
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  var emailLinks = document.querySelectorAll(".email-link");
  emailLinks.forEach(function (link) {
    var user = link.getAttribute("data-user");
    var domain = link.getAttribute("data-domain");
    var tld = link.getAttribute("data-tld");
    if (!user || !domain || !tld) {
      return;
    }

    var address = user + "@" + domain + "." + tld;
    link.setAttribute("href", "mailto:" + address);
    var label = link.querySelector("strong");
    if (label) {
      label.textContent = address;
    }
  });
})();
