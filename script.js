console.log("Hello World");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

/*
let votesInteresting = 23;
let votesMindblowing = 5;
const test = "Libson is the capital of Portugal";
*/

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return "This year is not possible";
}

const age1 = calcFactAge(2015);
console.log(age1);

let votesInteresting = 20;
let votesMindblowing = 5;

if (votesInteresting === votesMindblowing) {
  alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
  console.log("Interesting Fact!");
} else if (votesInteresting < votesMindblowing) {
  console.log("Mindblowing Fact!!");
}

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "The fact is False, check more sources...";

//alert(message);

const text = "Libson is the capital of Portugal";

}

//Testing for connection... (SUCESSFULLY CONNECTED TO "SCHOOL iPAD")
//Testing for connection... (FAILED TO CONNECT TO VS CODE)


