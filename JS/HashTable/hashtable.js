class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    // really fast in real-life scenarios -> O(1)
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    // 0(1)
    set(key, value) {
      let memAddress = this._hash(key);
      if (!this.data[memAddress]){
        this.data[memAddress] = [];
      }
      this.data[memAddress].push([key,value]);
      return this.data;
    }

    // O(1), in cases of hash collisions -> O(n)
    get(key) {
      let memAddress = this._hash(key);
      const currentBucket = this.data[memAddress];
      if (currentBucket) {
        for (let i=0; i < currentBucket.length; i++) {
          if (currentBucket[i][0] === key) {
            console.log(currentBucket[i][1]);
            return currentBucket[i]
          }
        }
      }
      return undefined;
    }

    keys() {
      const entries = [];
      if (this.data) {
        for (let i=0; i < this.data.length; i++) {
          if (this.data[i]) {
            entries.push(this.data[i][0][0]);
          }
        }
      }
      console.log(entries);
      return entries;
    }
}

// create the get and set functions to add and retrieve key, value data from the hash table.
  
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 8);
myHashTable.set('oranges', 3);
myHashTable.keys();