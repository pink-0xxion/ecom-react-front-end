export const mainCategory = [
    {
        name: "Men",
        categoryId: "men",
        level: 1
    },
    {
        name: "Women",
        categoryId: "women",
        level: 1
    },
    {
        name: "Home and Furniture",
        categoryId: "home_furniture",
        level: 1
    },
    {
        name: "Electronics",
        categoryId: "electronics",
        level: 1
    }
];


/*
JSON (JavaScript Object Notation) vs JavaScript Object

+-----------------------+-----------------------------------------------+-----------------------------------------------+
| Feature               | JavaScript Object                             | JSON (JavaScript Object Notation)             |
+-----------------------+-----------------------------------------------+-----------------------------------------------+
| Keys                  | Can be unquoted if they follow naming rules  | Must be double-quoted                         |
+-----------------------+-----------------------------------------------+-----------------------------------------------+
| Values                | Can include functions, undefined, and any    | Can only include strings, numbers, booleans,  |
|                       | JavaScript data types                         | arrays, null, and nested objects              |
+-----------------------+-----------------------------------------------+-----------------------------------------------+
| Data Format           | JavaScript-specific, used within JS code      | Text-based format, used for data exchange     |
+-----------------------+-----------------------------------------------+-----------------------------------------------+
| Parsing               | No parsing needed, used directly              | Needs parsing (JSON.parse()) and stringifying |
|                       |                                               | (JSON.stringify())                            |
+-----------------------+-----------------------------------------------+-----------------------------------------------+
| Comments              | Supports comments in the code (single-line    | No comments allowed                           |
|                       | // and multi-line )                    |                                               |
+-----------------------+-----------------------------------------------+-----------------------------------------------+

-> JavaScript Object: 
    Is used directly in JavaScript code, more flexible, and can include various data types like functions, undefined, etc.
-> JSON: 
    Is a string-based DATA FORMAT used for data exchange and is strict in terms of syntax (keys must be quoted, only basic data types are allowed).

*/