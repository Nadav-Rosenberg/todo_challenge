# Todo Challenge - Nadav 

I finished only a very basic version of the todo list. The plan was to add next copleted vs active in the model, to enable editing and to style the site. 

All finctionality is tested both in Karma and in Protractor. 

________________
________________

# Todo Challenge

* Deadline: submit completed pull request by 9am on Monday
* You may use whatever level of JavaScript you feel comfortable with - pure JS, jQuery, Angular, or whatever weird and wonderful framework you want to try. Extra points for DogeScript

Steps
-------

1. Fill out your learning plan self review for the week: https://github.com/makersacademy/learning_plan 
2. Fork this repo, and clone to your local machine
3. Complete the following challenge:

## Challenge

![Todo mockup](https://makersacademy.mybalsamiq.com/mockups/2914603.png?key=afabb09aef2901a2732515ae4349c1ec0458294b)

Build a Todo list as a mini front-end application. You don't have to use a database, the front-end is more important - you can use an appropriate data structure stored somewhere in your JavaScript (this time only!)

Here are the core user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

Here are some other user stories you may choose to implement:

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

As you may imagine, implementing a To-do list is very much a solved problem. However, we are mainly interested in seeing how you approach testing and design. We are looking for:

* well written, well structured acceptance and unit tests
* clear and expressive JavaScript
* good HTML5 markup

Don't worry about deployment, and make sure you read the CONTRIBUTING.md when submitting a pull request.

## Extensions

* Deploy the app
* Create a persistance layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node
* Make it look purdy (CSS) - try a framework like Bootstrap or Foundation

Good luck!

# Nadav's Notes: To be edited before pull request. 

## few learnings from previous challenges: 

* MVP: always have something working and tested. Better to have working and tested scooter than broken facy car!
* actually, I'm going to focus only on this and will write a list of MVPs...
* Second thing, invest in submission: refactor, good names, Hound, Etc. 

## about this challenge specifically

* so I need to set up an angular project. 
* Just to think about the frontend. Load a single page and start playing with it. 
* this is the focus: 
  * well written, well structured acceptance and unit tests
  * clear and expressive JavaScript
  * good HTML5 markup

## tips:

* don't use <div>s (still not clear use what instead?)
* use array syntax for dependency injection (still not clear, instead of using what?)
* be clear with all the packages / instalation instructions
* use angular directives: https://docs.angularjs.org/api/ng#directive
* use Angular fileters https://docs.angularjs.org/api/ng/filter/filte
* use "controller as" syntax. i.e. don't use $scope
* READ: http://stackoverflow.com/questions/18414012/what-does-angularjs-do-better-than-jquery

## What to do?

1) set up a project 
2) strat with a feature test - let it fail
3) move to a unit test and keep going! 

## list of featire tests? (maybe these are unit tests?, not clear): 

* it has a title "My todo list"
* it has a form to put in a todo item and a submit button (ot maybe enter?)
* it has a litst of inputed items
* it have a completed checkbox
* items can be edited 

## list of bonus unit tests: 

* Items can be filtered
 * all
 * completed 
 * in progress
* it has a counter field 
* it has a delete button
* it can delete completed items 

## some reflections after Friday and Sat morning

* about protractor: importnat to understand that things taks time when you work on the brwoeser (protractor), so the tests must use a specific protractol syntex to handle the events (I think), happened when tackling the array

* in both test frames, very importnat to understand which variables / elemets are available, could cuase quit some issues
* trick to reverse array: .slice().reverse()





