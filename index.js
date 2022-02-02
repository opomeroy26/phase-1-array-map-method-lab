const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*

const titleCased = () => {
  return tutorials
}
*/

/*
  const titleCased = () => {
  return tutorials.map(function (sArray) {
    let stringArray = sArray.split('');
    return (stringArray.map(function(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }).join('')
    )
  });
}
*/

function titler(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function spacer(sArray) {
  let stringArray = sArray.split(' ');
  return stringArray.map(titler).join(' ')
}

const titleCased = () => {
  console.log("titleCased")
  return tutorials.map(spacer);
}
