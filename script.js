const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM Elements

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list

factsList.innerHTML = "";

// Load Data from SUPABASE
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://ilwgyqmygiqqskedtxcv.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsd2d5cW15Z2lxcXNrZWR0eGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3NjA4MzEsImV4cCI6MjA3NDMzNjgzMX0.chCwHC8WKPd7XGVtSHF09ZCoz8z8IfMTFxJc3kd7KAU",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsd2d5cW15Z2lxcXNrZWR0eGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3NjA4MzEsImV4cCI6MjA3NDMzNjgzMX0.chCwHC8WKPd7XGVtSHF09ZCoz8z8IfMTFxJc3kd7KAU",
      },
    }
  );
  const data = await res.json();
  // console.log(data);
  // const filteredData = data.filter((fact) => fact.category === "society");
  create_facts_list(data);
}

function create_facts_list(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact"> 
  <p>
    ${fact.text}
    <a
      class="source"
      href="${fact.source}"
      target="_blank"
    >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
  </li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join(" ");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));

///////////////// LEARING SECTION & REFERENCES //////////////////

/*
let votesInteresting = 23;
let votesMindblowing = 5;
const test = "Libson is the capital of Portugal";
*/
/*
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `This year is not possible. Year needs to be less of equal to ${currentYear}`;
}
*/
/*

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(2037));

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible Year. Year needs to be less or 
    equal ${new Date().getFullYear()}`;
console.log(calcFactAge2(2015));


let votesInteresting = 20;
let votesMindblowing = 5;

if (votesInteresting === votesMindblowing) {
  alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
  console.log("Interesting Fact!");
} else if (votesInteresting < votesMindblowing) {
  console.log("Mindblowing Fact!!");
}

let votesFalse = 77;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "The fact is False, check more sources...";

//alert(message);

const text = "Libson is the capital of Portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `The current fact is "${text}". It is $
{calcFactAge(
  2015
)} years old. It is most likely ${
  totalUpvotes > votesFalse ? "correct" : "not true"
}.`;
console.log(str);

const factObj = {
  text: "Libson is the capital of Portugal",
  category: "society",
  created_in: 2015,
  is_correct: true,
  create_summary: function () {
    return `The Fact  "${
      this.text
    }" is from the category ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.text);
console.log(factObj["text"]);

console.log(category);
console.log(factObj.create_summary());

*/

/* 

const fact = ["Lisbon is the capital of Portugal", 2015, true];
console.log(fact);
console.log(fact[3]);
console.log(fact.length);
console.log(fact[fact.lengths - 1]);

const [text, created_in, is_correct] = fact;
console.log(text);

// ... = Spread operator (Unsips all the content from the array)

const newFact = [...fact, "society"];
console.log(newFact);

/*
[2, 4, 6, 8].forEach(function (el) {
  console.log(el);
});
*/

/*
const times10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(times10);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const all_categories = CATEGORIES.map((el) => el.name);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// Repeated function:

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `This year is not possible. Year needs to be less of equal to ${currentYear}`;
}

const fact_ages = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(fact_ages);

*/





