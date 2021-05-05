# Geometry

## Story

Online learning is a hot topic in these days. Your company just won
a state tender for an e-learning tool that helps high school students
learn maths.

Your team has just started planning a geometry module.
Hierarchical object-oriented modelling seemed a natural choice here:
after all, every square _is a_ rectangle, isn't it? So you came up with
a class hierarchy for six basic shapes, and your job will be to implement
the core features (like area and perimeter) of these shape types.

You also need to add a simple HTML page to list and add shapes 
from to a shape repository. Create navigation bar with buttons for specified options.
Oh, and don't forget to contribute to the emerging
documentation, so please draw a UML class diagram as well!


## What are you going to learn?

- draw UML class diagrams
- use inheritance
- override methods
- when static context (the `static` keyword) can be useful
- practice DOM manipulation
- event handling
- OOP thinking


## Tasks

1. Implement the constructors and the required methods in shape subclasses. The shapes should be immutable which means that their state (stored in attributes) cannot be changed.
    - All attributes are immutable
    - All attributes are private, and only those methods are not private which are used by other classes
    - All shape subclasses have an overridden version for calculating the corresponding perimeter and area
    - All shape subclasses have their custom `toString()` method. The representation includes the name of the shape (like `"Rectangle"`) and the names and values of its base attributes (in this case `"r=...`").

2. Implement `ShapeCollection` to manage a list of shapes. The collection can consist of any subtype of `Shape`.
    - It is possible to add shapes to the collection via the `addShape` method. Create button for that option, and form in `index.html`.
    - Method `getShapesTable()` generate HTML list with all the
shapes in the collection and their parameter values. Table should be inner into
`<div class='shapes-list'> </div>`.
    - Method `getLargestShapeByPerimeter()` returns the shape instance with the largest perimeter in the collection
    - Method `getLargestShapeByArea()` returns the shape instance with the largest area in the collection

3. Create a navigation bar in `index.html` with buttons that provides access to basic operations on a shape collection.
    - By choosing the "Add new shape" option, the user can select from a list of existing shapes (like circle) and after that she needs to specify the required parameters (like radius).
    - By choosing the "Show all shapes" option the list in HTML provided by the shape collection is displayed on the browser
    - By choosing the "Show shape with the largest perimeter" option displays the shape with largest perimeter in the collection
    - By choosing the "Show shape with the largest area" option displays the shape with largest area in the collection
    - By choosing the "Show formulas" buttons the user can select (add form wit select option values) from a list of existing shapes (like circle) and after that the stored formulas for that shape class (like `Circle area formula: π×r×r, Circle perimeter formula: 2×π×r` will be displayed in modal window.
    - The user can save and map data to ShapeCollection from Local Storage, so after refreshing the browser, the shapes which had been added previously, will be visible.

4. Create a class diagram based on the existing project skeleton structure and keep extending it when extending the code. Use [diagrams.net](https://diagrams.net/) to generate it.
    - Include public link to the UML, at the end of your README.md file.
    - Relation indicators on the diagram represent the actual state of code (like inheritance or composition between classes).
    - All fields are indicated on the diagram
    - All fields are indicated on the diagram

## General requirements

None

## Hints

- Remember that polymorphism enables you to reduce the amount
  of code to write. Use it to avoid data and logic redundancy.
- As a rule of thumb: a field _should_ be a class member
  (static) if all the instances share the same value, and
  a method _can_ be static if no instances are needed to perform its task
  e.g. no need to store state between invocations.
    - For example, the radius of a circle (`r`) is a field of
      a specific circle instance, but the written formula of
      its perimeter (`"2×π×r"`) is the same for all circles
      so this string should be stored only once in a class field.
    - Correspondingly, the method which calculates the actual area
      is an instance method (since it needs the value of `r`), while
      the method returning the formula can be static (since it only
      needs access to a static field).
- There are multiple ways to use PlantUML, but the easiest one is to
  use the online editor linked below. You can generate an image by
  clicking on "View as PNG" under the code box.

## Background materials

- <i class="far fa-exclamation"></i> [UML - Unified Modeling Language](https://drive.google.com/file/d/1mJnabPZYJ4beOVUwZJG_HNjzt3fM7--O/view?usp=sharing)

