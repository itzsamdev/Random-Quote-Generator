function generate() {
  let quotes = {
    "Albert Einstein":
      '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
    "Carrie Bradshaw":
      '"Maybe some women are not meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them."`',
    "Deepak Chopra":
      "“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”",
    "Mary Astell":
      "“If all men are born free, how is it that all women are born slaves?”",
    "C.S Lewis": "“I was not born to be free---I was born to adore and obey.”",
    "Aaron Lauritsen":
      "“The struggles we endure today will be the ‘good old days’ we laugh about tomorrow.”",
  };

  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];

  let quote = quotes[author];
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
