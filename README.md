# Javascript-30days-challenge

##Day 3 : 
- Learned that I can create properties with the suffix of 'Data'. 
- For example, <input data-sizing='px'> and when I console.log this.data, it shows 'sizing':px as a separate method.
- Also learned that I can define :root in style tag so it functions as base code. "filter: blur(var(--blur))
- Learned new event types such as 'change' and 'mousemove'.

##Day 4:
- Learned practical usage of filter(), map(), reduce(), sort()
- For reduce, we need to enter the default value(ex. {} / 0) at the end.
- Dom elements can be selected by querySelector. You can call queryselector against any existing dom element, not just 'document', to look inside of that dom element. 
- Sometimes we need to change the 'node'form into 'array' to search for elements that we want to select.
  * We can use'Array.from()' or '[...Array]'
- To find if an item includes certain strings, we use 'includes()'
- Still not sure why aLast - bLast doesn't work and aLast>bLast? 1:-1 works.

##Day 5:
- recapped some declarations in css
- 'transition' allows panel to animate itself according to the items defined in it.
- flex item can be a flex container at the same time. This results in netted flex
- Javascript part was basic 'addEventListener' function. However 'if'was used to scan for certain propertyName before toggling a class name which I still don't understand why.
- Toggle removes a class when it exists, and adds a class when it does not exist.

##Day 6:
- learned how to use 'match' with RegExp and how to use it inside a function. Match returns all the matching bundles inside an array.
 => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
- Event listener 'change' only fires when we go off that input(for example, click outside of searchbox) but 'Keyup' listens for added keys(typing the keyboard). The latter is more practical for recommending sth on a searchbox.
- Trying to figure out how 'this.value' works in this example.

##Day 7:
- Learned some useful methods such as some(), every(), and find(), findIndex().

##Day 8 :
- Used HTMLcanvaselement to implement drawing function. 
- getContext('2d') leads to the creation of a CanvasRenderingContext2D object representing a two-dimensional rendering context.
- global composite operation sets the type of compositing operation to apply when drawing new shapes.
- Learned how to use 'if'statement and variable representing 0 to gradually increase or reduce the size of our brush.
- learned that the order of event listeners is important since javascript runs in order from the top.

##Day 9 : 
- learned some dev tools to use on javascript console.
- styled : console.log('%c text text', 'font-size:50px; background:pink;')
- console.warn, console.error, console.info, console.dir, console.clear, console.table, console.count
- console.assert(input statement, 'text that will show if this statement is wrong')
- When grouping the end result by keys(columns), we use console.group/groupCollapsed(`${dog.name}`)/console.groupEnd(`${dog.name}`)

##Day 10 : 
- Learned how to make flag variables to set the direction, and change the outcome of 'if' statement as we intend.
- learned one of the event can derive whether 'shiftkey' action was made, (console.log(e.shiftkey))
- Still not sure where 'checked' is from in the js line (this.checked)

##Day 11 :
- Learned how to implement hover effect on css.
- Selected DOM elements, built functions, and merged them on addEventListeners.
- Built many single functions and learned how they interact to yield intended consequences.
- Learned basic statement that acts as 'if' statement. Not fully getting it tho...

##Day 12 : 
- Used some simple js methods & 'keyup' eventlistener to implement action when certain keys were pushed.
- Used 'splice' to keep the length of an array fixed. (ex. pressed.splice(-secretCode.length-1, pressed.length - secretCode.length)
- Summary of today's session : 1. Push the key into an empty array using e.key, 2. keep the length of arrays fixed 3. When the keys entered in a row are identical to our secret code, turn on the action (cornify_add)

##Day 13 :
- added eventlistener on entire window, and listened for 'scroll'.
- The problem with scroll is when we console.log event on the created function, it logs too many scroll events.
- we use 'debounce' to adjust for the number of(or the time interval of) events logged.
- Selected all DOM images and turned them into a variable. forEach, we calculated the 'image half shown state', and 'image scrolled down state'
- When the images are half shown and not scrolled past, simply add 'active' class to the classlist of image.
- 'active' class consists of css elements to basically turn the status of translateX and scale & opacity to default state in order to show them as they were.

##Day 14 :
- Learned that primitive values can be copied and changed without reference being changed, whereas Array and object cannot.
- Learned ways to copy the references with array : spread, slice, [].concat()
- Ways to copy an object : spread, Object.assign({}, objectname, changed element) -> but only one level deep elements can be changed
- Way to copy and change deeper levels of an object : JSON.parse(JSON.stringify()) -> Not recommended?

