/*
Implement Linked List
*/
function Node(data, link) {
	this.data = data || 0,
	this.link = link || null;
}

function LinkedList(node) {  
	this.head = node || null;
	if (this.head === null) this.count = 0;
	else this.count = 1;
}

LinkedList.prototype.append = function(node) {	
	if (this.head === null) {// Traverse the list and add at the end
		this.head = node;
    this.count++;
		return;
	}
	var temp = this.head;
	while (temp.link !== null) {
		temp = temp.link;
	}
	temp.link = node;
	node.link = null;
	this.count++;
}

LinkedList.prototype.deleteElement = function(node) {
   if (this.head === node) {
    var new_head = this.head.link;
    delete this.head['data'];
    delete this.head['link'];  
    this.head = new_head;
    this.count--;
    return;
  }

  var curr = this.head;

  while (curr.link != null) {
    if (curr.link == node) {
      var temp_node = curr.link;
      curr.link = temp_node.link 
      delete temp_node.data;
      delete temp_node.link;
      this.count--;
      break;
    } 
  }

}

LinkedList.prototype.display = function() {
	var temp = this.head,
		list_items = [];
	
	while (temp != null) {
		list_items.push(temp.data);
		temp = temp.link;
	}
	console.log(list_items);
}

LinkedList.prototype.reverse = function() {
	// a -> b -> c
	var prev = null,
		curr = this.head, 
		next = curr.link;
	
	while (next !== null) {
		next = curr.link;
		curr.link = prev;
		prev = curr;
		curr = next;
	}
	if (prev !== null) this.head = prev;
}


LinkedList.prototype.addatbeg = function() {
};

LinkedList.prototype.addafter = function() {
};

/* Build List. Append. Reverse */
var first_node = new Node(1),
	second_node = new Node(2),
	third_node = new Node(3);
	
var list = new LinkedList();
	list.append(first_node);
	list.append(second_node);
	list.append(third_node);
	
list.display();
list.reverse();
list.display();

console.log("List count " + list.count);

/* Test reverse list with one node. */
var list_with_one_node = new LinkedList(new Node(1));
list_with_one_node.display();
list_with_one_node.reverse();
list_with_one_node.display();

list.display();
list.deleteElement(second_node);
list.display();
console.log("List count " + list.count);