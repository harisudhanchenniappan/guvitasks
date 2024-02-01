OBJECTS AND ITS INTERNAL REPRESENTATION IN JAVASCRIPT

OBJECT - In object-oriented programming (OOP), objects are the things you think about first in designing a program and they are also the units of code that are eventually derived from the process. In between, each object is made into a generic class of object, and even more generic classes are defined so that objects can share models and reuse the class definitions in their code. Each object is an instance of a particular class or subclass with the class's own methods or procedures and data variables. An object is what actually runs in the computer.
	JavaScript is not a class-based object-oriented language. But it still has ways of using object oriented programming (OOP).

Characteristics of an object
All individual objects possess three basic characteristics -- identity, state and behaviour. Understanding these characteristics is crucial to knowing how objects and object-oriented logic work.
•	Identity means that each object has its own object identifier and can be differentiated from all other objects. Each object's name, or identity, is unique and distinct from other objects.
•	State refers to the properties of an object. For example, values of variables in the object contain data that can be added, changed or deleted.
•	Behaviour refers to actions that the object can take. For example, one object can respond to another object to carry out software functions.

Some of the things in programming that can be defined as objects include the following:
•	variables, which hold values that can be changed;
•	data structures, which are specialized formats used to organize and process data;
•	functions, which are named procedures that perform a defined task; and
•	methods, which are programmed procedures that are defined as components of a parent class and are included in any instance of that class.
Objects can do things and can have things done to them. For example, a function or method object can be programmed to modify the contents of a data structure or variable object.

A JavaScript object has properties associated with it. A property of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects. The properties of an object define the characteristics of the object. You access the properties of an object with a simple dot-notation:
Object Properties - The named values, in JavaScript objects, are called properties.
Object Methods - Methods are actions that can be performed on objects. Object properties can be both primitive values, other objects, and functions. An object method is an object property containing a function definition.


METHODS OF CREATING AN OBJECT:
There are different ways to create new objects:
•	Create a single object, using an object literal.
•	Create a single object, with the keyword new.
•	Define an object constructor, and then create objects of the constructed type.
•	Create an object using Object.create().

Using an Object Literal
This is the easiest way to create a JavaScript Object. Using an object literal, you both define and create an object in one statement. An object literal is a list of name:value pairs (like age:50) inside curly braces {}.The following example creates a new JavaScript object with four properties:
	Eg: var a={name:”harisudhan”, age:”24”, nationality:”Indian”}
We can also create an empty JavaScript and add properties later.
	Eg: let a={};
		a.name=”harisudhan”; a.age=”24”; a.nationality=”Indian”;

Using the JavaScript keyword new
	The following example shows how to create an object with the keyword new.
	Eg: let a=new Object();
		a.name=”harisudhan”; a.age=”24”; a.nationality=”Indian”;
        
Objects are mutable. They are addressed by reference and not by value.
	Eg: let a={};
		a.name=”harisudhan”; a.age=”24”; a.nationality=”Indian”;
		let b=a;
		b.age=”25”;
		console.log(a.age); // the output will be 25.



