window.onload = function() {
    const notification = document.getElementById("notification");
    const closeNotification = document.getElementById("close-notification");

    closeNotification.addEventListener("click", function() {
      notification.style.display = "none";
    });
  };