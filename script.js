const shareButton = document.getElementById("shareButton");

shareButton.addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Whale of a Friend Card",
        text: "You’re a whale of a friend!",
        url: window.location.href
      });
    } catch (error) {
      console.log("Sharing canceled or failed", error);
    }
  } else {
    alert("Sharing is not supported on this browser. You can copy the page link instead.");
  }
});