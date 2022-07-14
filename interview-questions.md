# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: In react, props, short for properties, is how information from the parent component to the children components. 

  Researched answer: Props is a keyword in React that is short for properties. What props does is pass information from one component to another, specificallly from parent to child. This pass of commmuncation does not go both ways it is unidirectionally. Props are immutable so it cannot be changed by the child it is passed to.



2. What is a DOM event?

  Your answer: a DOM event is a method that tracks events. Examples are onClick methods and onChange methods. An onChange looks for changes in the input and then saves the change. 

  Researched answer: DOM events are methods tat track when actions occur. The catalyst for these actions can be user inputs. Events track these inputs and other user interaction. DOM events go through three phases a capture phase where the events starts its journey to the element, a target phase where the event reaches the element, and a bubbling phase where the events goes back to its starting place which is the root of the document. 



3. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming (OOP) is the creation of new instances of a class. It is different from functional programming in that OOP is defined by a class and functional programming defined by functions.  

  Researched answer: Object-oriented programming (OOP) is a type of programming where you create a collection objects that communicate with eachother. OOP and Functional Programming differ in a few ways. For one, OOP is defined by objects and fuctional programming is defined functions. Another way in which they differ is in their attributes of immutability and mutability. Functional programming possesses the attribute of immutablilty. Immutibility makes it so that values cannot change. If you want a value to change the only way to do so is to create a new one. Immutability also allows functional programming to possess pure functions which are functions that are defined by their arguments. With the arguments within pure functional being immutable, functions are predictable.



4. What is the difference between a Float and an Integer in Ruby?

  Your answer: In Ruby, Integers and Floats differ in that Integers are whole numbers and Floats are partial numbers. 

  Researched answer: The most obivous difference between Floats and Integers is that Floats contain decimals. Using floats allow you to receive more precise solutions in mathematic equations. For instance in Ruby if you were to divide 3 by 742 you would receive an output of 0. This is because you used integers/whole numbers and so what is assumed is that you want to receive a whole number as an output. In order to receive the decimal output you would need to convert the number to a float/decimal number. 3.0/742 would then result in the output of 0.004043126684636119.



5. Ruby has an implicit return. What does that mean?

  Your answer: Implicit return is the return within a method that does not need to be called on rather it is implied and still produces an output. For example if you were to create a method to return an array returned "odd" and "even" for each number it would be writting like this:

    def odd_Even_Array array
      array.map do |value|
      if value.odd?
        'odd'
      else
        'even
      end
    end

  this method would return ['odd', 'even', 'odd', 'even'], but notice the absence of the keyword 'return' that is because the return is impilied in Ruby.



  Researched answer: Return in ruby means that within methods if a return is the last expression in the execution of the method than the return will automatically happend and therefore does not need to explicitly input into the code. Implicit return makes for clearner code. 



## Looking Ahead: Terms for Next Week

1. Instance Variable:

2. PostgreSQL:

3. Ruby on Rails:

4. ORM:

5. Active Record:
