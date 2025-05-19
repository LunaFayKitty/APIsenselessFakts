const responseDiv = document.getElementById("response");
let headline = document.getElementById("headline");
let showBtn = document.getElementById("show");
let languageBtn = document.getElementById("language");
let currentLanguage = "en";

const options = {
  baseURL: "https://uselessfacts.jsph.pl/",
  url: "/api/v2/facts/random?language=en",
  methode: "get",
};

function fetchAndShow() {
  axios(options)
    .then((response) => {
      console.log("response", response);
      console.log("data", response.data);
      responseDiv.innerText = JSON.stringify(response.data.text);
      currentFactId = response.data.id;
    })
    .catch((exception) => {
      console.log("exception", exception);
      responseDiv.innerText =
        exception.response?.data?.message ?? exception.message;
    });
}

function switchLanguage() {
  console.log(headline.innerText);
  if (currentLanguage === "en") {
    switchToDe();
    fetchAndShow();
    return;
  } else {
    switchToEng();
    fetchAndShow();
  }
  return;
}

function switchToDe() {
  options.url = "/api/v2/facts/random?language=de";
  headline.innerText = "Sinnlos";
  showBtn.innerHTML = "Zeig einen sinnlosen Fakt";
  languageBtn.innerText = "Sprache";
  currentLanguage = "de";
}
function switchToEng() {
  options.url = "/api/v2/facts/random?language=en";
  headline.innerText = "Senseless";
  showBtn.innerText = "Show a senseless fact";
  languageBtn.innerText = "Language";
  currentLanguage = "en";
}
