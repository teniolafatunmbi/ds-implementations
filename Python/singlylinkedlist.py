
class Node(object):
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next

class Linkedlist(object):
    def __init__(self):
        self.head = None
    
    # add node to beginning of the list
    def add_to_front(self, data):
        self.head = Node(data=data, next=None)

    # add node to the end of the list
    def add_to_end(self, data):
        new_node = Node(data=data, next=None)
        # check if the list has an head
        if not self.head:
            self.head = new_node
            return 
        
        # else set head to current element
        curr = self.head

        # if list already has element, check for the node with a next=None value
        while curr.next:
            curr = curr.next

        # set curr.next to new node
        curr.next = new_node

    # delete last node in the list
    def delete_end(self):
        if not self.head:
            return 'List is empty'
        
        # else set head to current element
        curr = self.head

        # if list already has element, check for the node with a next=None value
        while curr.next: 
            # curr = curr.next
            prev, curr = curr, curr.next

        # set prev.next to null
        prev.next = None

    def delete_first(self):
        if not self.head:
            return 'List is empty'
        curr = self.head
        prev, curr = curr, curr.next
        prev.data = prev = None
        self.head = curr

    def get_first_node(self):
        if self.head:
            return self.head.data
        return 'List is empty'

    def get_last_node(self):
        if self.head:
            curr = self.head
            while curr.next is not None:
                curr = curr.next
            return curr.data
        return 'List is empty'

    def get_node_at_index(self, index):
        if self.head:
            #set index to zero
            i = 0
            curr = self.head

            # move to the next node and increment index
            while curr.next:
                # check if the index matches the current count
                if index == i:
                    return curr.data
                curr = curr.next
                i += 1
        return 'List is not that long'

    def insert_node_at_index(self, data, index):
        new_node = Node(data)
        if self.head:
            #set index to zero
            i = 0
            curr = self.head
            # move to the next node and increment index
            while curr.next:
                # check if the index matches the current count
                if index == i:
                    prev, curr = curr, curr.next
                    prev.next = new_node
                    new_node.next = curr
                curr = curr.next
                i += 1

    def remove_node_at_index(self, index):
        # new_node = Node(data)
        if self.head:
            #set index to zero
            i = 0
            curr = self.head
            # move to the next node and increment index
            while curr.next:
                # check if the index matches the current count
                if index == i:
                    prev, curr = curr, curr.next
                    prev.next = None
                    # new_node.next = curr
                curr = curr.next
                i += 1
    # display nodes in the linked list
    def display(self):
        node = self.head
        while node != None:
            dl = " => "
            if node.next == None:
                dl = ""
            print(node.data, end=dl )
            node = node.next

s = Linkedlist()
s.add_to_front(10)
s.add_to_front(30)
s.add_to_end(90)
s.display()
# print()
# s.delete_first()
# s.display()
# print()
# print(s.get_last_node())
print()
# print(s.get_node_at_index(1))
print(s.remove_node_at_index(1))