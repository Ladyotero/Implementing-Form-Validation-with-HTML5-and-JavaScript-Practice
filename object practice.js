// ### **Excersice 2: Create a Simple Object**

// **Prompt:**

// Create a object named `pickleball paddle`that represents the object. It should have the following properties:

// 1. `brand` (e.g., "Engage Encore Pro")
// 2. `category`(e.g., "pickleball paddle pro")
// 3. `price` (e.g., 129.99)
// 4. An action -- function that prints something

//---

const pickleballPaddle = {
    brand:"Engage Encore Pro",
    category:"pickleball paddle pro",
    price:129.99,
    pickleballPaddle: function() {
     console.log(`Great options available "${this.brand}" by ${this.price}. It is ${this.category} category."`)
    }
}

pickleballPaddle.pickleballPaddle();