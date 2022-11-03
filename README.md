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
