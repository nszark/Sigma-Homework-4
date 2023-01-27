// TASK 1

function task1(input){
  let result;
  if (input.length < 2){
    result = 0;
  }
  else {
    result = Math.max.apply(Math, input) - Math.min.apply(Math, input);
  };
  return result;
}

console.log("Task 1");
console.log(task1([]));
console.log(task1([-14]));
console.log(task1([1, 2, 3, -4]));
console.log("------------------------");

// TASK 2

function task2(number, text){
  let newText = [];
  for (word of text.split(' ')){
    if (word.length > number){
      newText.push(word);
    }
  };
  return newText;
}

console.log("Task 2");
console.log(task2(1, "Hello my name is Nazar BigWord a VeryBigWord"));
console.log(task2(3, "Hello my name is Nazar BigWord a VeryBigWord"));
console.log(task2(5, "Hello my name is Nazar BigWord a VeryBigWord"));
console.log("------------------------");

// TASK 3

function task3(text, ending){
  let result = text.endsWith(ending);
  return result;
}

console.log("Task 3");
console.log(task3("abc", "bc"));
console.log(task3("abc", "cb"));
console.log(task3("abcd", "d"));
console.log("------------------------");

// TASK 4

function task4(array){
  let averageArray = [];
  for (let i = 1; i < array.length; i++){
    averageArray.push((array[i] + array[i-1])/2);
  };
  return averageArray;
}

console.log("Task 4");
console.log(task4([2, -2, 2, -2, 2]));
console.log(task4([1, 3, 5, 1, -10]));
console.log("------------------------");

// TASK 5

function task5_1(text){
  let count = text.match(/[aeiouAEIOU]/gi).length;
  return count;
}

function task5_2(text){
  let count = text.match(/[abcABC]/gi);
  if (!count){
    return null;
  } else {
    const noABC = text.replace(/[abcABC]/gi, '');
    return noABC;
  }
}

console.log("Task 5");
console.log(task5_1("Celebration"));
console.log(task5_1("Palm"));
console.log(task5_2("This might be a bit hard"));
console.log(task5_2("hello world!"));
console.log("------------------------");

// TASK 6

function task6(firstArray, secondArray){
  let union = Array.from(new Set([...firstArray, ...secondArray]));
  return union;
}

console.log("Task 6");
console.log(task6([1, 2, 3], [100, 2, 1, 10]));
console.log("------------------------");

// TASK 7

function task7(pairs){
  let swapped = Object.entries(pairs).map(
    ([key, value]) => [value, key]
  );

  return Object.fromEntries(swapped);
};

console.log("Task 7");
console.log(task7({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
console.log("------------------------");

// TASK 8

function task8(stolenThings, insurance){
  let sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);
  let stolenValue = sumValues(stolenThings);
  return stolenValue - insurance;
};

console.log("Task 8");
console.log(task8({ "baseball bat": 20 }, 5));
console.log(task8({ skate: 10, painting: 20 }, 19));
console.log(task8({ skate: 200, painting: 200, shoes: 1 }, 400));
console.log("------------------------");

// TASK 9

function task9(a, b, c, w, h){
  let dimensions = [a, b, c].sort(function(a, b) {
    return a - b;
  });
  let maxHoleDim = Math.max(w, h); 
  if (dimensions[1] <= maxHoleDim) {
    return true;
  }
  else {
    return false;
  }
};

console.log("Task 9");
console.log(task9(1, 1, 1, 1, 1));
console.log(task9(1, 2, 1, 1, 1));
console.log(task9(1, 2, 2, 1, 1));
console.log("------------------------");

// TASK 10

function task10(fullPath){
  let fileName = fullPath.substring(fullPath.lastIndexOf('/') + 1);
  let extension = fullPath.substring(fullPath.lastIndexOf('.'));
  let result = fullPath.replace(fileName, '');
  return result.concat(extension);
}

console.log("Task 10");
console.log(task10('c:/WebServers/home/testsite/www/myfile.txt'));
console.log("------------------------");

//TASK 11

function task11(str1, str2){
        return (str1.length == str2.length) &&
               ((str1 + str1).indexOf(str2) != -1);
    }

console.log("Task 11");
console.log(task11('abcd','dabc'));
console.log(task11('abcd','dbac'));
console.log("------------------------");

//TASK 12

function task12(numbers){
  let lesserArray = [];
  let biggerArray = [];
  let sortedArray = numbers.sort(function(a, b) {
    return a - b;
  });
  let numTimes = sortedArray.length;
  let differenceArray = [];
  for (let i = 0; i <= numTimes / 2 - 1; i++){
    differenceArray.length = 0;
    for (let i = 1; i < sortedArray.length; i++){
      differenceArray.push(sortedArray[i]-sortedArray[i-1]);
    };
    let minimumDiff = Math.min.apply(Math, differenceArray);
    let index = differenceArray.indexOf(minimumDiff);
    lesserArray.push(sortedArray[index]);
    biggerArray.push(sortedArray[index+1]);
    sortedArray.splice(index, 2);
  };
  let result = lesserArray.concat("SEPARATOR");
  result = result.concat(biggerArray);
  return result; 
};

console.log("Task 12");
console.log(task12([1, 1.5, 3.75, 4]));
console.log(task12([1, 1.5, 4.6, 3.75, 4, 4.8]));
console.log("------------------------");

//TASK 13

function task13(text){
  let words = text.split(" ");
  let newWords = [];
  let firstMarker = 0;
  for (const word of words){
    console.log(word);
    const emailExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    if (emailExp.test(word)){
      newWords.push("[E-MAILS PROHIBITED]");
      continue;
    }
    const linkExp = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    if (linkExp.test(word)){
      newWords.push("[LINKS PROHIBITED]");
      continue;
    }
    if ((!isNaN(word)) && (word.length > 3)){
      continue;
    }
    if (firstMarker != 0){
      newWords.push(word.toLowerCase());
    } else {
      newWords.push(word.charAt(0) + word.substring(1).toLowerCase());
    }
    firstMarker++;
  };
  return newWords;
}

console.log("Task 13");
console.log(task13("HELLO 1234455 nazar.semkiv@hmail.com NiCE to MEET YOU"));
console.log("------------------------");

//TASK 14

function task14(expr){
    let stack = [];
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
        if (x == '(' || x == '[' || x == '{')
        {
            stack.push(x);
            continue;
        }
        if (stack.length == 0)
            return false;    
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
  
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break; 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
    return (stack.length == 0);
}

console.log("Task 14");
console.log(task14("()()()[][{}]{{}}"));
console.log(task14("(()()()[][{}]{{}})"));
console.log(task14("()())("));
console.log("------------------------");

//TASK 15

function task15() {
  let length = 20, // choose length
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_",
      retVal = "";
  let underscoreInsertion = Math.floor(Math.random() * length);
  length = length - 1;
  for (var i = 0, n = charset.length; i < length; ++i) {
      if (i == underscoreInsertion) {
        retVal += "_";
      };
      let randomChar = charset.charAt(Math.floor(Math.random() * n));
      if (i >= 1){
      let numbersConsChecker = "0123456789".includes(randomChar) && "0123456789".includes(retVal[i-1]);
      do {
        randomChar = charset.charAt(Math.floor(Math.random() * n));
        numbersConsChecker = "0123456789".includes(randomChar) && "0123456789".includes(retVal[i-1]);
      } while (numbersConsChecker == true);}
      retVal += randomChar;
  };
  if (underscoreInsertion == length){
    retVal += "_";
  };
  return retVal;
};

console.log("Task 15");
console.log(task15());
console.log("------------------------");

//TASK 16

function task16 (numbers){
  let newArray = [];
  for (let i = 1; i < numbers.length; i++){
    newArray.push('');
  };
  let sortedArray = numbers.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < numbers.length; i++){
    if (i % 2 == 0){
      newArray[i / 2] = sortedArray[i];
    } else {
      newArray[numbers.length - (i - 1) / 2 - 1] = sortedArray[i];
    }
  };
  return newArray;
}

console.log("Task 16");
console.log(task16([1, 3, 7, 4]));
console.log(task16([1, 3, 7, 4, 15, 42, 2, 5]));
console.log("------------------------");