function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();

  if (name1 === "" || name2 === "") {
    alert("Give Both Names.");
  } else {
    const loveper = Math.floor(Math.random() * 101);
    const result = document.getElementById("result");
    result.innerHTML = `${name1} and ${name2} 's Love Percentage: ${loveper}`;

    if (loveper < 30) {
      result.innerHTML += "<br> She Is Just Your Friend";
    } else if (loveper >= 30 && loveper < 70) {
      result.innerHTML += "<br> Give More Time To Her";
    } else {
      result.innerHTML += "<br> She Is Also Willing To Marry You";
    }
  }
}
