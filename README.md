# js-array-of-objects-sort
Extend Array.prototype to have a method for sorting an array of objects by a specified object property

# Notes

* Sorts strings alphabetically (A - Z)
* Sorts ints ascending (1, 2, 3, etc)

# Usage
Include the file (probably globally):
~~~
<script src="your/path/to/arrayofobjsort.js"></script>
~~~

Now use it by calling `sortByObjProp` on any array of objects:
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

/* To sort by the 'id' property: */
objArray.sortByObjProp('id');
console.log(objArray);

/* To sort by the 'name' property: */
objArray.sortByObjProp('name');
console.log(objArray);

/* To sort by the 'otherString' property: */
objArray.sortByObjProp('otherString');
console.log(objArray);

/* To sort by the 'otherInt' property: */
objArray.sortByObjProp('otherInt');
console.log(objArray);
~~~

Also check out: [Link to CodePen](https://codepen.io/mikeparda/pen/eepvrW?editors=0012)
