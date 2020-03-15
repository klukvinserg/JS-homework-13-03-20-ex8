let q = confirm("Would you like to know: 'What time in seconds is now?'");

let time;

if (q === true) {
  time = new Date();
  document.write(
    `Time in the seconds: ${timeResult(
      time.getHours(),
      time.getMinutes(),
      time.getSeconds()
    )}`
  );
} else {
  document.write("You don't want to know a time");
}

function timeResult(a, b, c) {
  return a * 3600 + b * 60 + c;
}
