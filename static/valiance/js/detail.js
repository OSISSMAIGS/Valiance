function showDetail(eventName, classEvent, descEvent) {
  document.getElementById("detail").style.display = "block";
  const heading = document.getElementById("detail-heading");
  const logo = document.getElementById("detail-logo");
  const desc = document.getElementById("detail-desc");

  heading.innerText = eventName;
  logo.className = classEvent;
  desc.innerText = descEvent;
}

function closeDetail() {
  document.getElementById("detail").style.display = "none";
}