# JS Array of Objects Sort
Extend Array.prototype to have a method for sorting an array of objects by a specified object property

[Live Example on CodePen](https://codepen.io/mikeparda/pen/eepvrW?editors=0012)

# Notes

* By default, sorts strings alphabetically (A - Z).  Include 2nd parameter of 'desc' to sort in descending order.
* By default, sorts ints ascending (1, 2, 3, etc).  Include 2nd parameter of 'desc' to sort in descending order.

# Usage
Include the file (probably globally):
~~~
<script src="your/path/to/arrayofobjsort.min.js"></script>
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

/* To sort by the 'name' property: */
objArray.sortByObjProp('name');
console.log(objArray);

/* To sort by the 'name' property in desc: */
objArray.sortByObjProp('name', 'desc');
console.log(objArray);

/* To sort by the 'name' property and explicitly call 'asc' sorting: */
objArray.sortByObjProp('name', 'asc');
console.log(objArray);

/* To sort by the 'otherString' property: */
objArray.sortByObjProp('otherString');
console.log(objArray);

/* To sort by the 'otherInt' property: */
objArray.sortByObjProp('otherInt');
console.log(objArray);
~~~

### TODO:
* Support multi-layer objects? (sort on object's object property or object's array index)
* Support sorting array of arrays by index
