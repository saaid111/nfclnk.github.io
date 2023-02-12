window.onload = function() {
  const searchParams = new URLSearchParams(document.referrer);
  const serialNumber = searchParams.get('serial');
  if (serialNumber === "04:13:60:EA:5E:70:81") {
    // Give the user 10 points
    const points = localStorage.getItem('points') || 0;
    localStorage.setItem('points', Number(points) + 10);
    alert("You have earned 10 points! Your total points are: " + (Number(points) + 10));
  } else {
    alert("Sorry, you did not come from a valid NFC link.");
  }
};
