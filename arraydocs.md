Learn **JavaScript arrays**. I’ll explain each concept clearly, and you can try examples in your browser’s developer console or a code editor like [JSFiddle](https://jsfiddle.net/) or [CodePen](https://codepen.io/).

---

### 🟨 Step 1: What is an Array?

An **array** is a way to store multiple values in a single variable.

#### Example:

```javascript
let fruits = ["apple", "banana", "cherry"];
```

Here, `fruits` is an array that contains 3 string elements.

---

### 🟨 Step 2: Accessing Array Elements

You can access elements in an array using **index numbers**, starting from `0`.

#### Example:

```javascript
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "cherry"
```

---

### 🟨 Step 3: Modifying Elements

You can change the value of a specific index.

#### Example:

```javascript
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]
```

---

### 🟨 Step 4: Array Length

Use `.length` to find out how many elements are in an array.

#### Example:

```javascript
console.log(fruits.length); // 3
```

---

### 🟨 Step 5: Adding Elements

#### 🔹 To the End – Use `.push()`

```javascript
fruits.push("orange");
console.log(fruits); // ["apple", "blueberry", "cherry", "orange"]
```

#### 🔹 To the Beginning – Use `.unshift()`

```javascript
fruits.unshift("mango");
console.log(fruits); // ["mango", "apple", "blueberry", "cherry", "orange"]
```

---

### 🟨 Step 6: Removing Elements

#### 🔹 From the End – Use `.pop()`

```javascript
fruits.pop();
console.log(fruits); // ["mango", "apple", "blueberry", "cherry"]
```

#### 🔹 From the Beginning – Use `.shift()`

```javascript
fruits.shift();
console.log(fruits); // ["apple", "blueberry", "cherry"]
```

---

### 🟨 Step 7: Looping Through an Array

Use a `for` loop or `forEach()` to go through all elements.

#### Using `for`:

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

#### Using `forEach()`:

```javascript
fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

---

### 🟨 Step 8: Common Array Methods

| Method         | What it does                            |
| -------------- | --------------------------------------- |
| `.includes(x)` | Checks if `x` is in the array           |
| `.indexOf(x)`  | Finds the index of `x`                  |
| `.slice(a,b)`  | Returns part of array from `a` to `b-1` |
| `.splice()`    | Adds/removes items at specific indexes  |
| `.join()`      | Converts array to a string              |

---

**Hands-on practice** with a little challenge, and then introduce more **advanced topics** like `map`, `filter`, and `reduce`.

---

## ✅ Hands-On Practice: Mini Exercise 1

Try typing this into your browser’s console or a code editor:

```javascript
let animals = ["dog", "cat", "rabbit"];

// 1. Add "hamster" to the end
animals.push("hamster");

// 2. Remove the first item
animals.shift();

// 3. Change "rabbit" to "parrot"
animals[1] = "parrot";

// 4. Print each item one by one
animals.forEach(function(animal) {
  console.log(animal);
});
```

✅ **Goal**: You should see `"cat"`, `"parrot"`, `"hamster"` printed.

Want me to check your result or help if it didn’t work?

---

## 🔁 Step 9: Advanced Array Methods

Let’s start with three powerful methods: `map`, `filter`, and `reduce`.

---

### 🔷 `map()` – Transform Each Item

`map` creates a **new array** by changing each item.

#### Example:

```javascript
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(n) {
  return n * 2;
});

console.log(doubled); // [2, 4, 6, 8]
```

---

### 🔷 `filter()` – Keep Only Some Items

`filter` creates a **new array** with items that pass a condition.

#### Example:

```javascript
let numbers = [5, 10, 15, 20];
let bigNumbers = numbers.filter(function(n) {
  return n > 10;
});

console.log(bigNumbers); // [15, 20]
```

---

### 🔷 `reduce()` – Turn Array Into One Value

`reduce` takes all items and combines them into a single value.

#### Example:

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(total, num) {
  return total + num;
}, 0);

console.log(sum); // 10
```

---

## 🎯 Challenge 2: Practice with `map`, `filter`, `reduce`

Try this:

```javascript
let scores = [80, 95, 70, 100, 60];

// 1. Add 5 bonus points to each score
let bonusScores = scores.map(score => score + 5);

// 2. Keep only scores above 90
let topScores = bonusScores.filter(score => score > 90);

// 3. Find the total of top scores
let total = topScores.reduce((sum, score) => sum + score, 0);

console.log("Bonus Scores:", bonusScores);
console.log("Top Scores:", topScores);
console.log("Total of Top Scores:", total);
```

