# js-array-of-objects-sort
Extend Array.prototype to have a function for sorting an array of objects by a specified object property

# Notes

* Sorts strings alphabetically (A - Z)
* Sorts ints ascending (1, 2, 3, etc)

# Usage
Include the file (probably globally):
~~~
<script src="your/path/to/arrayofobjsort.js"></script>
~~~

Now use it:
~~~
var objArray = [
	{id: 1, name: 'zzz', otherString: 'xxx', otherInt: 5},
	{id: 2, name: 'aaa', otherString: 'zzz', otherInt: 7},
	{id: 3, name: 'ddd', otherString: 'yyy', otherInt: 9999},
	{id: 4, name: 'bbb', otherString: 'ggg', otherInt: 1},
	{id: 5, name: 'fff', otherString: 'aaa', otherInt: 566},
	{id: 6, name: 'ccc', otherString: 'bbb', otherInt: 45},
	{id: 7, name: 'eee', otherString: 'ccc', otherInt: 2}
]

console.log("---- Sorted by 'id' property ----");
objArray.sortByObjProp('id');
console.log(objArray);

console.log("---- Sorted by 'name' property ----");
objArray.sortByObjProp('name');
console.log(objArray);

console.log("---- Sorted by 'otherString' property ----");
objArray.sortByObjProp('otherString');
console.log(objArray);

console.log("---- Sorted by 'otherInt' property ----");
objArray.sortByObjProp('otherInt');
console.log(objArray);
~~~

Also check out: [Link to CodePen](https://codepen.io/mikeparda/pen/eepvrW?editors=0012)
