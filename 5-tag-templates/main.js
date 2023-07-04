const QUOTES = [
  {
    quote:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    author: "Author 1",
    year: 2022,
  },
  {
    quote:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    author: "Author 2",
    year: 2024,
  },
  {
    quote:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    author: "Albert Einstein",
    year: 1950,
  },
];

const quotesList = document.querySelector("#quotes-list");

const getQuoteTemplate = (quote, author, year) => {
  return `<div class="quote-block">
    <blockquote>${quote}</blockquote>
    <p>${author} - ${year}</p>
    </div>`;
};

const setupQuotesList = () => {
  for (let i = 0; i < QUOTES.length; i++) {
    const quoteElement = QUOTES[i];

    quotesList.innerHTML += getQuoteTemplate(
      quoteElement.quote,
      quoteElement.author,
      quoteElement.year
    );
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const formElements = event.target.elements;

  const newQuote = {
    author: formElements.author.value,
    quote: formElements.quote.value,
    year: formElements.year.value,
  };

  console.log(newQuote);
  quotesList.innerHTML += getQuoteTemplate(
    newQuote.quote,
    newQuote.author,
    newQuote.year
  );

//*Esto limpiar el formulario
  event.target.reset();
};

const form = document.querySelector("#quote-form");
form.addEventListener("submit", handleFormSubmit);

setupQuotesList();
