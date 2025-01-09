# Javascript HTML DOM EventListener

## Syntax: What are the three parameters (arguments) of the addEventListener method:

-The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)

-The second parameter is the function we want to call when the event occurs

-The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional

# How do you remove an event listener from an element:

-You can easily remove an event listener by using the removeEventListener() method

## HTML DOM Events

-Find three types of event, other than click that you would like to learn more about. Why do they interest you?

 > Scroll EventL understanding how users navigate  > content by scrolling can provide insights into >  user engagement and impve webpage design,
 > Resize Event: learning how to handle changes in  > viewport size
 > Drag and drop events

## What is the DOM

-The DOM is a W3C (World Wide Web Consortium) standard. The DOM defines a standard for accessing documents:

"The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document"

-What are four things the DOM defines;
> The HTML elements as objects
> The properties of all HTML elements
>The methods to access all HTML elements
>The events for all HTML elements

In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements

## How can you attach an "inline event handler" to an element

-HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

With single quotes:

```sh
<element event='some JavaScript'>
With double quotes:

<element event="some JavaScript">
```

## In the video, what did the function handleBoxClick do in the program

-It will handling the box clicking, in the function

## How would you find the x, y coordinates of a mouse click using an Event Object

-In the console you will see the object mouseevent and then you can located the controlkey and see if it was true, then clientX and client y and you will see they have been access the information

## There is a subtle difference between using Standard vs. Arrow Functions in event listeners

-In how they handle the ``this`` context;
 Standard functions, refers to the element that fired the event
 Arrow functions, do not have their own ``this``

## What does this refer to in the context of a function used as an Event Handler

-how they handle the ``this`` context,
use standard functions when you need ``this`` to refer to the event target and use arrow functions when you want to maintain the ``this`` context of the enclosing scope

## What are the classes that were used to center the div horizontally and vertically?

``div class="container">``

## What does the number at the end of the col-* class name mean? (For example, what does the 8 at the end of col-md-8 mean?)

``column-md-6`` what it means is that he is trying to add the first name and last name, and he wants to test if it will work corecctly 50% of the space.
