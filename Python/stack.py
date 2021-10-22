class Stack(object):
    def __init__(self):
        self.items = []
    
    def is_empty(self):
        return self.items == []

    def push(self, item):
        return self.items.insert(0, item)
    
    def pop(self):
        return self.items.pop(0)
    
    def display(self):
        print(self.items)

stack = Stack()
stack.push('2')
stack.push(9)
stack.display()