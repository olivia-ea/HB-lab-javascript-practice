> const greeting = "Hello how are you"
undefined
> greeting.split()
[ 'Hello how are you' ]
> greeting.split(' ')
[ 'Hello', 'how', 'are', 'you' ]
> const hello = "Hello"
undefined
> hello.split(" ")
[ 'Hello' ]
> hello.split()
[ 'Hello' ]
> hello.split('')
[ 'H', 'e', 'l', 'l', 'o' ]
> hello
'Hello'
> const hello = "Hello"
SyntaxError: Identifier 'hello' has already been declared
> const goodbye =  'goodbye'
undefined
> let good =  'good'
undefined
> good = good.split('')
[ 'g', 'o', 'o', 'd' ]
> good
[ 'g', 'o', 'o', 'd' ]
> good.join('')
'good'
> 
> let myArray = ['Jack', 'Jill', 'Beanstalk']
undefined
> let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
undefined
> randomItem
'Jack'
> let randomItem2 = myArray[Math.floor(Math.random() * myArray.length)];
undefined
> randomItem2
'Jack'
> let randomItem3 = myArray[Math.floor(Math.random() * myArray.length)];
undefined
> randomItem3
'Beanstalk'
> myArray
[ 'Jack', 'Jill', 'Beanstalk' ]
> randomItem3
'Beanstalk'
> randomItem2
'Jack'
> myArray.indexOf(randomItem2)
0
> let jack = myArray.indexOf(randomItem2)
undefined
> jack
0
> let beanstalk = myArray.indexOf(randomItem3)
undefined
> beanstalk
2
> tempvar = jack
ReferenceError: tempvar is not defined
> let tempvar = jack
undefined
> tempvar
0
> myArray[jack]
'Jack'
> let tempvar1 = myArray[jack]
undefined
> let tempvar2 = myArray[beanstalk]
undefined
> tempvar2
'Beanstalk'
> myArray[beanstalk] = tempvar1
'Jack'
> myArray[jack] = tempvar2
'Beanstalk'
> myArray
[ 'Beanstalk', 'Jill', 'Jack' ]
> 
> for (let key of Object.keys(candy)) {
... console.log(`The ${candy[key]} flavor is colored ${candy}`);
... }
undefined
> for (let key of Object.keys(candy)) {
... console.log(`The ${candy[key]} flavor is colored ${candy}`);}
undefined
> 
> for (const [key, value] of myMap.entries()) {
... 
... ;
... ;
... 
> for (const [key, value] of candy.entries()) {
... console.log(key, value);}
red cherry
blue blueberry
pink strawberry
green apple
yellow lemon
undefined
> for (const [key, value] of candy.entries()) {
... console.log(`The ${value} flavor is colored ${key}`);}
The cherry flavor is colored red
The blueberry flavor is colored blue
The strawberry flavor is colored pink
The apple flavor is colored green
The lemon flavor is colored yellow
undefined
> candy.set('red', 'cherry');
Map { 'red' => 'cherry' }
> candy.set('blue', 'blueberry');
Map { 'red' => 'cherry', 'blue' => 'blueberry' }
> candy.set('pink', 'strawberry');
Map {
  'red' => 'cherry',
  'blue' => 'blueberry',
  'pink' => 'strawberry' }
> candy.set('green', 'apple');
Map {
  'red' => 'cherry',
  'blue' => 'blueberry',
  'pink' => 'strawberry',
  'green' => 'apple' }
> candy.set('yellow', 'lemon');
Map {
  'red' => 'cherry',
  'blue' => 'blueberry',
  'pink' => 'strawberry',
  'green' => 'apple',
  'yellow' => 'lemon' }
> candy.has('cherry')
false
> candy.has('red')
true
> 



function findCandy(color, candy){
  if (candy.has[color]) {
    return candy[color];
  }
  else {
    console.log("Sorry, that color doesn't have a flavor");
  }
}
