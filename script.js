function generate() {
  let quotes = {
    

   "-James Cameron" : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. ",

   "-Nelson Mandela": '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
   "- Winston Churchill": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
   
   "- Will Rogers": '"Don’t Let Yesterday Take Up Too Much Of Today."',

   "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',

   "- Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',

   "- Earl Nightingale": '"We become what we think about."',

   "- Buddah": '"The mind is everything. What you think you become."',

   "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life."',

   "- Maya Angelou": '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',

   "- Jim Rohn": '"Either you run the day, or the day runs you."',

   "- Frank Sinatra": '"The best revenge is massive success."',

   "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be."',

   "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',

  }

  let authors = Object.keys(quotes);

  let author = authors[Math.floor(Math.random() * authors.length)]

  let quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;

  document.getElementById("author").innerHTML = author;
}

