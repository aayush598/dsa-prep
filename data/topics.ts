import type { Topic, Lesson } from "@/types";

export const topics: Topic[] = [
  {
    id: "arrays",
    slug: "arrays",
    title: "Arrays",
    description:
      "Master the fundamental building block of programming. Learn traversal, searching, sorting, and manipulation of array data structures.",
    icon: "LayoutGrid",
    difficulty: "beginner",
    color: "from-blue-500 to-cyan-500",
    totalProblems: 45,
    lessons: [
      {
        id: "arr-1",
        title: "Introduction to Arrays",
        slug: "introduction",
        description:
          "Understanding array memory layout, indexing, and basic operations.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Creating and accessing arrays\nconst arr = [10, 20, 30, 40, 50];\n\n// Access by index\nconsole.log(arr[0]); // 10\nconsole.log(arr[2]); // 30\n\n// Length\nconsole.log(arr.length); // 5\n\n// Modify\narr[1] = 25;\nconsole.log(arr); // [10, 25, 30, 40, 50]",
        language: "javascript",
        timeComplexity: "O(1) access",
        spaceComplexity: "O(n)",
        keyInsights: [
          "Arrays store elements in contiguous memory locations",
          "Index-based access is O(1) — constant time",
          "Insertion and deletion at arbitrary positions is O(n)",
        ],
      },
      {
        id: "arr-2",
        title: "Array Traversal Patterns",
        slug: "traversal-patterns",
        description:
          "Learn the essential patterns for traversing arrays effectively.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Forward traversal\nfor (let i = 0; i < arr.length; i++) {\n  console.log(arr[i]);\n}\n\n// Backward traversal\nfor (let i = arr.length - 1; i >= 0; i--) {\n  console.log(arr[i]);\n}\n\n// While loop traversal\nlet i = 0;\nwhile (i < arr.length) {\n  console.log(arr[i]);\n  i++;\n}",
        language: "javascript",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        keyInsights: [
          "Forward traversal is the most common pattern",
          "Backward traversal is useful for deletion operations",
          "Choose loop type based on whether you need the index",
        ],
      },
      {
        id: "arr-3",
        title: "Two Pointer Technique",
        slug: "two-pointer",
        description:
          "Use two pointers to solve array problems efficiently.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Two sum (sorted array)\nfunction twoSum(arr, target) {\n  let left = 0;\n  let right = arr.length - 1;\n  \n  while (left < right) {\n    const sum = arr[left] + arr[right];\n    if (sum === target) return [left, right];\n    if (sum < target) left++;\n    else right--;\n  }\n  return [-1, -1];\n}",
        language: "javascript",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        keyInsights: [
          "Two pointers can reduce O(n²) to O(n)",
          "Works best on sorted arrays or when pointers move in opposite directions",
          "Common patterns: opposite ends, same direction, fast-slow",
        ],
      },
      {
        id: "arr-4",
        title: "Sliding Window",
        slug: "sliding-window",
        description:
          "Master the sliding window pattern for subarray problems.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Maximum sum subarray of size k\nfunction maxSumSubarray(arr, k) {\n  let windowSum = 0;\n  let maxSum = -Infinity;\n  \n  // Calculate first window\n  for (let i = 0; i < k; i++) {\n    windowSum += arr[i];\n  }\n  maxSum = windowSum;\n  \n  // Slide the window\n  for (let i = k; i < arr.length; i++) {\n    windowSum += arr[i] - arr[i - k];\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  \n  return maxSum;\n}",
        language: "javascript",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        keyInsights: [
          "Sliding window avoids recalculating overlapping subarrays",
          "Fixed window: size is predetermined",
          "Variable window: size changes based on condition",
        ],
      },
    ],
  },
  {
    id: "strings",
    slug: "strings",
    title: "Strings",
    description:
      "Explore string manipulation, pattern matching, and common string algorithms used in technical interviews.",
    icon: "Type",
    difficulty: "beginner",
    color: "from-purple-500 to-pink-500",
    totalProblems: 40,
    lessons: [
      {
        id: "str-1",
        title: "String Fundamentals",
        slug: "fundamentals",
        description: "String properties, methods, and immutability.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          '// Strings are immutable in JavaScript\nconst str = "Hello, World!";\n\n// Common methods\nconsole.log(str.length);        // 13\nconsole.log(str.toUpperCase()); // HELLO, WORLD!\nconsole.log(str.slice(0, 5));   // Hello\nconsole.log(str.includes("World")); // true\nconsole.log(str.split(", "));   // ["Hello", "World!"]\n\n// Build strings efficiently\nconst parts = [];\nfor (let i = 0; i < 1000; i++) {\n  parts.push(String(i));\n}\nconst result = parts.join("");',
        language: "javascript",
        keyInsights: [
          "Strings are immutable — concatenation creates new strings",
          "Use array of characters + join for efficient building",
          "ASCII values matter for character comparison",
        ],
      },
      {
        id: "str-2",
        title: "Palindrome Problems",
        slug: "palindromes",
        description: "Identify and solve palindrome-related string problems.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Check palindrome\nfunction isPalindrome(s) {\n  let left = 0;\n  let right = s.length - 1;\n  \n  while (left < right) {\n    if (s[left] !== s[right]) return false;\n    left++;\n    right--;\n  }\n  return true;\n}\n\n// Longest palindromic substring\nfunction longestPalindrome(s) {\n  let start = 0, maxLen = 1;\n  \n  function expandAroundCenter(l, r) {\n    while (l >= 0 && r < s.length && s[l] === s[r]) {\n      if (r - l + 1 > maxLen) {\n        start = l;\n        maxLen = r - l + 1;\n      }\n      l--;\n      r++;\n    }\n  }\n  \n  for (let i = 0; i < s.length; i++) {\n    expandAroundCenter(i, i);     // Odd length\n    expandAroundCenter(i, i + 1); // Even length\n  }\n  \n  return s.substring(start, start + maxLen);\n}",
        language: "javascript",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        keyInsights: [
          "Two pointers from center is the classic palindrome approach",
          "Handle both odd and even length palindromes",
          "Manacher's algorithm achieves O(n) — good to know about",
        ],
      },
      {
        id: "str-3",
        title: "Anagram & Character Counting",
        slug: "anagrams",
        description:
          "Solve anagram problems using character frequency maps.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Check if two strings are anagrams\nfunction isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  \n  const count = {};\n  \n  for (const char of s) {\n    count[char] = (count[char] || 0) + 1;\n  }\n  \n  for (const char of t) {\n    if (!count[char]) return false;\n    count[char]--;\n  }\n  \n  return true;\n}",
        language: "javascript",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) — fixed alphabet size",
        keyInsights: [
          "Character frequency maps are the go-to approach for anagram problems",
          "Sorting both strings works too but is O(n log n)",
          "For fixed alphabet (a-z), an array of size 26 is faster than a map",
        ],
      },
    ],
  },
  {
    id: "linked-lists",
    slug: "linked-lists",
    title: "Linked Lists",
    description:
      "Understand linked list structures, pointer manipulation, and classic linked list algorithms.",
    icon: "Link",
    difficulty: "beginner",
    color: "from-emerald-500 to-teal-500",
    totalProblems: 30,
    lessons: [
      {
        id: "ll-1",
        title: "Singly Linked List Basics",
        slug: "singly-linked-list",
        description: "Node structure, traversal, and basic operations.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "class ListNode {\n  constructor(val, next = null) {\n    this.val = val;\n    this.next = next;\n  }\n}\n\n// Create: 1 -> 2 -> 3\nconst head = new ListNode(1);\nhead.next = new ListNode(2);\nhead.next.next = new ListNode(3);\n\n// Traverse\nlet current = head;\nwhile (current) {\n  console.log(current.val);\n  current = current.next;\n}",
        language: "javascript",
        keyInsights: [
          "Each node stores data and a pointer to the next node",
          "No random access — must traverse from head",
          "Insertion/deletion at head is O(1)",
        ],
      },
      {
        id: "ll-2",
        title: "Fast & Slow Pointers",
        slug: "fast-slow-pointers",
        description:
          "Detect cycles and find middle elements using the two-pointer technique.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Detect cycle (Floyd's algorithm)\nfunction hasCycle(head) {\n  let slow = head;\n  let fast = head;\n  \n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  \n  return false;\n}\n\n// Find middle element\nfunction findMiddle(head) {\n  let slow = head;\n  let fast = head;\n  \n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n  \n  return slow;\n}",
        language: "javascript",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        keyInsights: [
          "Slow pointer moves 1 step, fast moves 2 steps",
          "If there's a cycle, fast will eventually meet slow",
          "Finding middle is a direct application of the same pattern",
        ],
      },
    ],
  },
  {
    id: "stacks",
    slug: "stacks",
    title: "Stacks",
    description:
      "Master the LIFO data structure and solve problems involving nested structures and monotonic patterns.",
    icon: "Layers",
    difficulty: "beginner",
    color: "from-orange-500 to-amber-500",
    totalProblems: 25,
    lessons: [
      {
        id: "stk-1",
        title: "Stack Fundamentals",
        slug: "fundamentals",
        description: "LIFO principle, push/pop operations, and use cases.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Stack implementation using array\nconst stack = [];\n\n// Push\nstack.push(1);\nstack.push(2);\nstack.push(3);\n\n// Pop\nconsole.log(stack.pop()); // 3\nconsole.log(stack.pop()); // 2\n\n// Peek\nconsole.log(stack[stack.length - 1]); // 1\n\n// Check if empty\nconsole.log(stack.length === 0); // false",
        language: "javascript",
        keyInsights: [
          "Stack follows Last In, First Out (LIFO) principle",
          "Push and pop are both O(1) operations",
          "Useful for undo operations, call stacks, and parsing",
        ],
      },
      {
        id: "stk-2",
        title: "Monotonic Stack",
        slug: "monotonic-stack",
        description:
          "Solve next greater/smaller element problems efficiently.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Next Greater Element\nfunction nextGreaterElement(nums) {\n  const result = new Array(nums.length).fill(-1);\n  const stack = []; // stores indices\n  \n  for (let i = 0; i < nums.length; i++) {\n    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {\n      const idx = stack.pop();\n      result[idx] = nums[i];\n    }\n    stack.push(i);\n  }\n  \n  return result;\n}",
        language: "javascript",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        keyInsights: [
          "Each element is pushed and popped at most once → O(n)",
          "Maintains elements in monotonic (increasing/decreasing) order",
          "Key insight: elements that are popped have found their answer",
        ],
      },
    ],
  },
  {
    id: "queues",
    slug: "queues",
    title: "Queues",
    description:
      "Learn queue operations, BFS traversal, and priority queue implementations.",
    icon: "AlignJustify",
    difficulty: "beginner",
    color: "from-sky-500 to-blue-500",
    totalProblems: 20,
    lessons: [
      {
        id: "q-1",
        title: "Queue Basics",
        slug: "basics",
        description: "FIFO principle and basic queue operations.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Queue using array\nconst queue = [];\n\n// Enqueue\nqueue.push(1);\nqueue.push(2);\nqueue.push(3);\n\n// Dequeue\nconsole.log(queue.shift()); // 1\nconsole.log(queue.shift()); // 2\n\n// Front\nconsole.log(queue[0]); // 3",
        language: "javascript",
        keyInsights: [
          "Queue follows First In, First Out (FIFO) principle",
          "shift() is O(n) in arrays — use a proper queue implementation",
          "Deques allow O(1) operations at both ends",
        ],
      },
      {
        id: "q-2",
        title: "BFS with Queues",
        slug: "bfs",
        description:
          "Use queues for level-order traversal and breadth-first search.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Level-order traversal of binary tree\nfunction levelOrder(root) {\n  if (!root) return [];\n  \n  const result = [];\n  const queue = [root];\n  \n  while (queue.length) {\n    const levelSize = queue.length;\n    const currentLevel = [];\n    \n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      currentLevel.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    \n    result.push(currentLevel);\n  }\n  \n  return result;\n}",
        language: "javascript",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        keyInsights: [
          "BFS explores all neighbors before moving to next level",
          "Queue is the essential data structure for BFS",
          "Level-order traversal naturally processes nodes level by level",
        ],
      },
    ],
  },
  {
    id: "hash-maps",
    slug: "hash-maps",
    title: "Hash Maps",
    description:
      "Harness the power of hash-based lookups for O(1) average-case operations and solve frequency-based problems.",
    icon: "Hash",
    difficulty: "beginner",
    color: "from-violet-500 to-purple-500",
    totalProblems: 35,
    lessons: [
      {
        id: "hm-1",
        title: "Hash Map Fundamentals",
        slug: "fundamentals",
        description: "How hash maps work and when to use them.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          '// JavaScript Map\nconst map = new Map();\nmap.set("apple", 5);\nmap.set("banana", 3);\n\nconsole.log(map.get("apple")); // 5\nconsole.log(map.has("banana")); // true\nconsole.log(map.size);          // 2\n\n// JavaScript Object as hash map\nconst freq = {};\nconst chars = "hello";\nfor (const c of chars) {\n  freq[c] = (freq[c] || 0) + 1;\n}\nconsole.log(freq); // { h: 1, e: 1, l: 2, o: 1 }',
        language: "javascript",
        keyInsights: [
          "Hash maps provide O(1) average lookup, insert, and delete",
          "Use Map for ordered keys, Object for simple key-value pairs",
          "Hash collisions degrade performance to O(n) worst case",
        ],
      },
      {
        id: "hm-2",
        title: "Frequency Counting Patterns",
        slug: "frequency-counting",
        description:
          "Solve problems using character/element frequency maps.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Two strings are close if you can transform one to another\n// using: swap any two characters, or transform any char to another\nfunction closeStrings(word1, word2) {\n  if (word1.length !== word2.length) return false;\n  \n  const freq1 = {}, freq2 = {};\n  for (const c of word1) freq1[c] = (freq1[c] || 0) + 1;\n  for (const c of word2) freq2[c] = (freq2[c] || 0) + 1;\n  \n  // Same characters must exist\n  if (Object.keys(freq1).sort().join() !== Object.keys(freq2).sort().join())\n    return false;\n  \n  // Same frequency distribution\n  const vals1 = Object.values(freq1).sort((a, b) => a - b);\n  const vals2 = Object.values(freq2).sort((a, b) => a - b);\n  \n  return vals1.join() === vals2.join();\n}",
        language: "javascript",
        timeComplexity: "O(n)",
        spaceComplexity: "O(k) where k = unique characters",
        keyInsights: [
          "Grouping by frequency transforms complex problems into simple comparisons",
          "Sort frequency arrays when comparing distributions",
          "Two-pass counting is a common pattern",
        ],
      },
    ],
  },
  {
    id: "trees",
    slug: "trees",
    title: "Trees",
    description:
      "Navigate hierarchical data structures including binary trees, BSTs, and tree traversals.",
    icon: "GitBranch",
    difficulty: "intermediate",
    color: "from-green-500 to-emerald-500",
    totalProblems: 50,
    lessons: [
      {
        id: "tree-1",
        title: "Binary Tree Basics",
        slug: "binary-tree-basics",
        description: "Tree terminology, node structure, and traversals.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "class TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}\n\n// Inorder: Left -> Root -> Right\nfunction inorder(node) {\n  if (!node) return [];\n  return [...inorder(node.left), node.val, ...inorder(node.right)];\n}\n\n// Preorder: Root -> Left -> Right\nfunction preorder(node) {\n  if (!node) return [];\n  return [node.val, ...preorder(node.left), ...preorder(node.right)];\n}\n\n// Postorder: Left -> Right -> Root\nfunction postorder(node) {\n  if (!node) return [];\n  return [...postorder(node.left), ...postorder(node.right), node.val];\n}",
        language: "javascript",
        keyInsights: [
          "Inorder traversal of BST gives sorted order",
          "Preorder is useful for creating a copy of the tree",
          "Postorder is useful for deleting a tree",
        ],
      },
      {
        id: "tree-2",
        title: "Binary Search Tree",
        slug: "bst",
        description: "BST property, search, insert, and delete operations.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// BST Search\nfunction searchBST(root, val) {\n  if (!root || root.val === val) return root;\n  if (val < root.val) return searchBST(root.left, val);\n  return searchBST(root.right, val);\n}\n\n// Validate BST\nfunction isValidBST(root, min = -Infinity, max = Infinity) {\n  if (!root) return true;\n  if (root.val <= min || root.val >= max) return false;\n  return (\n    isValidBST(root.left, min, root.val) &&\n    isValidBST(root.right, root.val, max)\n  );\n}",
        language: "javascript",
        timeComplexity: "O(h) where h = height",
        spaceComplexity: "O(h)",
        keyInsights: [
          "BST property: left < root < right for all nodes",
          "Search/insert/delete are O(h) — O(log n) balanced, O(n) worst",
          "Inorder traversal of BST yields sorted sequence",
        ],
      },
      {
        id: "tree-3",
        title: "Tree DFS & BFS Patterns",
        slug: "dfs-bfs-patterns",
        description: "Depth-first and breadth-first traversal patterns for trees.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Max depth (DFS)\nfunction maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}\n\n// Level order (BFS)\nfunction levelOrder(root) {\n  if (!root) return [];\n  const result = [];\n  const queue = [root];\n  \n  while (queue.length) {\n    const size = queue.length;\n    const level = [];\n    for (let i = 0; i < size; i++) {\n      const node = queue.shift();\n      level.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    result.push(level);\n  }\n  return result;\n}",
        language: "javascript",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        keyInsights: [
          "DFS uses recursion (or explicit stack), BFS uses queue",
          "DFS goes deep first, BFS explores level by level",
          "Choose DFS for path problems, BFS for shortest path",
        ],
      },
    ],
  },
  {
    id: "heaps",
    slug: "heaps",
    title: "Heaps & Priority Queues",
    description:
      "Master heap data structures for efficient min/max operations and top-k problems.",
    icon: "Mountain",
    difficulty: "intermediate",
    color: "from-rose-500 to-red-500",
    totalProblems: 25,
    lessons: [
      {
        id: "heap-1",
        title: "Heap Fundamentals",
        slug: "fundamentals",
        description: "Min-heap, max-heap, and heap operations.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Using JavaScript's Min-Heap (via array)\nclass MinHeap {\n  constructor() { this.heap = []; }\n  \n  push(val) {\n    this.heap.push(val);\n    this._bubbleUp(this.heap.length - 1);\n  }\n  \n  pop() {\n    const min = this.heap[0];\n    const end = this.heap.pop();\n    if (this.heap.length > 0) {\n      this.heap[0] = end;\n      this._sinkDown(0);\n    }\n    return min;\n  }\n  \n  peek() { return this.heap[0]; }\n  \n  _bubbleUp(i) {\n    while (i > 0) {\n      const parent = Math.floor((i - 1) / 2);\n      if (this.heap[parent] <= this.heap[i]) break;\n      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];\n      i = parent;\n    }\n  }\n  \n  _sinkDown(i) {\n    const length = this.heap.length;\n    while (true) {\n      let smallest = i;\n      const left = 2 * i + 1;\n      const right = 2 * i + 2;\n      if (left < length && this.heap[left] < this.heap[smallest])\n        smallest = left;\n      if (right < length && this.heap[right] < this.heap[smallest])\n        smallest = right;\n      if (smallest === i) break;\n      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];\n      i = smallest;\n    }\n  }\n}",
        language: "javascript",
        timeComplexity: "Insert: O(log n), Extract: O(log n), Peek: O(1)",
        spaceComplexity: "O(n)",
        keyInsights: [
          "Min-heap: parent is always smaller than children",
          "Max-heap: parent is always larger than children",
          "Complete binary tree stored as array — no pointers needed",
        ],
      },
      {
        id: "heap-2",
        title: "Top-K Problems",
        slug: "top-k",
        description:
          "Solve top-k and k-th largest/smallest problems using heaps.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Kth largest element\nfunction findKthLargest(nums, k) {\n  // Use a min-heap of size k\n  const minHeap = new MinHeap();\n  \n  for (const num of nums) {\n    minHeap.push(num);\n    if (minHeap.size() > k) {\n      minHeap.pop();\n    }\n  }\n  \n  return minHeap.peek();\n}\n\n// Top K Frequent Elements\nfunction topKFrequent(nums, k) {\n  const freq = {};\n  for (const n of nums) freq[n] = (freq[n] || 0) + 1;\n  \n  return Object.entries(freq)\n    .sort((a, b) => b[1] - a[1])\n    .slice(0, k)\n    .map(([num]) => Number(num));\n}",
        language: "javascript",
        timeComplexity: "O(n log k)",
        spaceComplexity: "O(n)",
        keyInsights: [
          "Min-heap of size k tracks the k largest elements seen so far",
          "Max-heap for k smallest problems",
          "Hash map + heap is the classic combo for frequency-based top-k",
        ],
      },
    ],
  },
  {
    id: "graphs",
    slug: "graphs",
    title: "Graphs",
    description:
      "Explore graph representations, traversals, shortest paths, and cycle detection algorithms.",
    icon: "Network",
    difficulty: "advanced",
    color: "from-indigo-500 to-violet-500",
    totalProblems: 55,
    lessons: [
      {
        id: "graph-1",
        title: "Graph Representations",
        slug: "representations",
        description: "Adjacency list vs adjacency matrix and when to use each.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Adjacency List\nconst graph = {\n  A: [\"B\", \"C\"],\n  B: [\"A\", \"D\"],\n  C: [\"A\", \"D\"],\n  D: [\"B\", \"C\"]\n};\n\n// Adjacency Matrix (0-indexed)\n//   A B C D\n// A 0 1 1 0\n// B 1 0 0 1\n// C 1 0 0 1\n// D 0 1 1 0\nconst matrix = [\n  [0, 1, 1, 0],\n  [1, 0, 0, 1],\n  [1, 0, 0, 1],\n  [0, 1, 1, 0]\n];",
        language: "javascript",
        keyInsights: [
          "Adjacency list: O(V+E) space — better for sparse graphs",
          "Adjacency matrix: O(V²) space — better for dense graphs",
          "Edge lookup: O(degree) for list, O(1) for matrix",
        ],
      },
      {
        id: "graph-2",
        title: "DFS & BFS on Graphs",
        slug: "dfs-bfs",
        description:
          "Traverse graphs using depth-first and breadth-first approaches.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// DFS (recursive)\nfunction dfs(graph, node, visited = new Set()) {\n  visited.add(node);\n  console.log(node);\n  \n  for (const neighbor of graph[node]) {\n    if (!visited.has(neighbor)) {\n      dfs(graph, neighbor, visited);\n    }\n  }\n}\n\n// BFS\nfunction bfs(graph, start) {\n  const visited = new Set([start]);\n  const queue = [start];\n  \n  while (queue.length) {\n    const node = queue.shift();\n    console.log(node);\n    \n    for (const neighbor of graph[node]) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push(neighbor);\n      }\n    }\n  }\n}",
        language: "javascript",
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)",
        keyInsights: [
          "DFS uses stack (implicit via recursion), BFS uses queue",
          "Both visit each vertex once → O(V + E)",
          "Always track visited to avoid infinite loops in cyclic graphs",
        ],
      },
      {
        id: "graph-3",
        title: "Dijkstra's Shortest Path",
        slug: "dijkstra",
        description:
          "Find shortest paths in weighted graphs using Dijkstra's algorithm.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "function dijkstra(graph, start) {\n  const dist = {};\n  const prev = {};\n  const pq = new MinHeap(); // [distance, node]\n  \n  for (const node in graph) dist[node] = Infinity;\n  dist[start] = 0;\n  pq.push([0, start]);\n  \n  while (pq.size() > 0) {\n    const [d, u] = pq.pop();\n    if (d > dist[u]) continue;\n    \n    for (const [v, weight] of graph[u]) {\n      const newDist = dist[u] + weight;\n      if (newDist < dist[v]) {\n        dist[v] = newDist;\n        prev[v] = u;\n        pq.push([newDist, v]);\n      }\n    }\n  }\n  \n  return { dist, prev };\n}",
        language: "javascript",
        timeComplexity: "O((V + E) log V)",
        spaceComplexity: "O(V)",
        keyInsights: [
          "Works with non-negative edge weights only",
          "Greedy approach: always process the closest unvisited node",
          "Priority queue is key to efficiency",
        ],
      },
    ],
  },
  {
    id: "sorting",
    slug: "sorting",
    title: "Sorting Algorithms",
    description:
      "Understand and implement all major sorting algorithms with their trade-offs.",
    icon: "ArrowUpDown",
    difficulty: "intermediate",
    color: "from-amber-500 to-yellow-500",
    totalProblems: 20,
    lessons: [
      {
        id: "sort-1",
        title: "Comparison Sorts",
        slug: "comparison-sorts",
        description: "Bubble, selection, insertion, and merge sort.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Merge Sort\nfunction mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  \n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  \n  return merge(left, right);\n}\n\nfunction merge(left, right) {\n  const result = [];\n  let i = 0, j = 0;\n  \n  while (i < left.length && j < right.length) {\n    if (left[i] <= right[j]) {\n      result.push(left[i++]);\n    } else {\n      result.push(right[j++]);\n    }\n  }\n  \n  return [...result, ...left.slice(i), ...right.slice(j)];\n}\n\n// Quick Sort\nfunction quickSort(arr) {\n  if (arr.length <= 1) return arr;\n  \n  const pivot = arr[Math.floor(arr.length / 2)];\n  const left = arr.filter(x => x < pivot);\n  const mid = arr.filter(x => x === pivot);\n  const right = arr.filter(x => x > pivot);\n  \n  return [...quickSort(left), ...mid, ...quickSort(right)];\n}",
        language: "javascript",
        keyInsights: [
          "Merge sort: O(n log n) guaranteed, stable, needs O(n) space",
          "Quick sort: O(n log n) average, O(n²) worst, in-place, unstable",
          "Insertion sort: O(n²) but fast on nearly sorted data",
        ],
      },
      {
        id: "sort-2",
        title: "Counting & Radix Sort",
        slug: "non-comparison",
        description:
          "Non-comparison sorts that break the O(n log n) barrier.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Counting Sort\nfunction countingSort(arr) {\n  const max = Math.max(...arr);\n  const count = new Array(max + 1).fill(0);\n  \n  for (const num of arr) count[num]++;\n  \n  const result = [];\n  for (let i = 0; i < count.length; i++) {\n    while (count[i]-- > 0) result.push(i);\n  }\n  \n  return result;\n}",
        language: "javascript",
        timeComplexity: "O(n + k) where k = range of input",
        spaceComplexity: "O(n + k)",
        keyInsights: [
          "Counting sort: O(n + k) — great when range k is small",
          "Radix sort: O(d × (n + k)) — sorts digit by digit",
          "These are NOT comparison-based — they can beat O(n log n)",
        ],
      },
    ],
  },
  {
    id: "searching",
    slug: "searching",
    title: "Searching Algorithms",
    description:
      "Master binary search and its many variations for efficient problem solving.",
    icon: "Search",
    difficulty: "intermediate",
    color: "from-cyan-500 to-sky-500",
    totalProblems: 30,
    lessons: [
      {
        id: "search-1",
        title: "Binary Search Fundamentals",
        slug: "binary-search",
        description: "Classic binary search and its template.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Standard binary search\nfunction binarySearch(arr, target) {\n  let left = 0;\n  let right = arr.length - 1;\n  \n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  \n  return -1;\n}\n\n// Leftmost binary search\nfunction searchLeft(arr, target) {\n  let left = 0, right = arr.length;\n  while (left < right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] >= target) right = mid;\n    else left = mid + 1;\n  }\n  return left;\n}",
        language: "javascript",
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)",
        keyInsights: [
          "Binary search halves the search space each step → O(log n)",
          "Two templates: `left <= right` and `left < right`",
          "Common mistake: integer overflow with `mid = (left + right) / 2`",
        ],
      },
    ],
  },
  {
    id: "dynamic-programming",
    slug: "dynamic-programming",
    title: "Dynamic Programming",
    description:
      "Break complex problems into overlapping subproblems. Master memoization, tabulation, and classic DP patterns.",
    icon: "Brain",
    difficulty: "advanced",
    color: "from-fuchsia-500 to-pink-500",
    totalProblems: 60,
    lessons: [
      {
        id: "dp-1",
        title: "DP Fundamentals",
        slug: "fundamentals",
        description:
          "Understanding overlapping subproblems and optimal substructure.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Fibonacci: Naive recursion → Memoization → Tabulation\n\n// Naive: O(2^n)\nfunction fib(n) {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n}\n\n// Memoization: O(n)\nfunction fibMemo(n, memo = {}) {\n  if (n <= 1) return n;\n  if (n in memo) return memo[n];\n  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);\n  return memo[n];\n}\n\n// Tabulation: O(n)\nfunction fibTab(n) {\n  const dp = [0, 1];\n  for (let i = 2; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n  }\n  return dp[n];\n}\n\n// Space optimized: O(1) space\nfunction fibOpt(n) {\n  let prev = 0, curr = 1;\n  for (let i = 2; i <= n; i++) {\n    [prev, curr] = [curr, prev + curr];\n  }\n  return curr;\n}",
        language: "javascript",
        keyInsights: [
          "DP = Recursion + Memoization (top-down) or Tabulation (bottom-up)",
          "Optimal substructure: optimal solution contains optimal solutions to subproblems",
          "Overlapping subproblems: same subproblems are solved multiple times",
        ],
      },
      {
        id: "dp-2",
        title: "1D DP Patterns",
        slug: "1d-dp",
        description:
          "Classic one-dimensional DP problems and their solutions.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Climbing Stairs\nfunction climbStairs(n) {\n  if (n <= 2) return n;\n  let prev2 = 1, prev1 = 2;\n  for (let i = 3; i <= n; i++) {\n    [prev2, prev1] = [prev1, prev2 + prev1];\n  }\n  return prev1;\n}\n\n// House Robber\nfunction rob(nums) {\n  if (nums.length === 0) return 0;\n  if (nums.length === 1) return nums[0];\n  \n  let prev2 = 0, prev1 = 0;\n  for (const num of nums) {\n    [prev2, prev1] = [prev1, Math.max(prev1, prev2 + num)];\n  }\n  return prev1;\n}",
        language: "javascript",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        keyInsights: [
          "Many 1D DP problems reduce to: dp[i] = f(dp[i-1], dp[i-2])",
          "Space optimization from O(n) to O(1) is common",
          "Identify the state: what information do you need at each step?",
        ],
      },
      {
        id: "dp-3",
        title: "2D DP Patterns",
        slug: "2d-dp",
        description:
          "Grid-based and two-dimensional dynamic programming.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Unique Paths in Grid\nfunction uniquePaths(m, n) {\n  const dp = Array.from({ length: m }, () => Array(n).fill(1));\n  \n  for (let i = 1; i < m; i++) {\n    for (let j = 1; j < n; j++) {\n      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\n    }\n  }\n  \n  return dp[m - 1][n - 1];\n}\n\n// Longest Common Subsequence\nfunction lcs(s1, s2) {\n  const m = s1.length, n = s2.length;\n  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));\n  \n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (s1[i-1] === s2[j-1]) {\n        dp[i][j] = dp[i-1][j-1] + 1;\n      } else {\n        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);\n      }\n    }\n  }\n  \n  return dp[m][n];\n}",
        language: "javascript",
        timeComplexity: "O(m × n)",
        spaceComplexity: "O(m × n)",
        keyInsights: [
          "2D DP is common in grid problems and string comparison",
          "LCS is a foundational 2D DP problem — many others build on it",
          "State: dp[i][j] represents answer for first i and j elements",
        ],
      },
    ],
  },
  {
    id: "greedy",
    slug: "greedy",
    title: "Greedy Algorithms",
    description:
      "Learn to make locally optimal choices that lead to globally optimal solutions.",
    icon: "Zap",
    difficulty: "intermediate",
    color: "from-lime-500 to-green-500",
    totalProblems: 25,
    lessons: [
      {
        id: "greedy-1",
        title: "Greedy Strategy",
        slug: "strategy",
        description:
          "When greedy works and how to prove correctness.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Activity Selection Problem\nfunction activitySelection(activities) {\n  // Sort by end time\n  activities.sort((a, b) => a.end - b.end);\n  \n  const selected = [activities[0]];\n  let lastEnd = activities[0].end;\n  \n  for (let i = 1; i < activities.length; i++) {\n    if (activities[i].start >= lastEnd) {\n      selected.push(activities[i]);\n      lastEnd = activities[i].end;\n    }\n  }\n  \n  return selected;\n}\n\n// Jump Game\nfunction canJump(nums) {\n  let maxReach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > maxReach) return false;\n    maxReach = Math.max(maxReach, i + nums[i]);\n  }\n  return true;\n}",
        language: "javascript",
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(1)",
        keyInsights: [
          "Greedy makes the locally optimal choice at each step",
          "Not all problems have greedy solutions — must prove correctness",
          "Greedy is a special case of DP (when subproblem dependency is simple)",
        ],
      },
    ],
  },
  {
    id: "backtracking",
    slug: "backtracking",
    title: "Backtracking",
    description:
      "Explore all possible solutions by building candidates incrementally and abandoning invalid paths.",
    icon: "RotateCcw",
    difficulty: "advanced",
    color: "from-red-500 to-orange-500",
    totalProblems: 30,
    lessons: [
      {
        id: "bt-1",
        title: "Backtracking Framework",
        slug: "framework",
        description:
          "The universal backtracking template for permutations, combinations, and subsets.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Permutations\nfunction permute(nums) {\n  const result = [];\n  \n  function backtrack(path, used) {\n    if (path.length === nums.length) {\n      result.push([...path]);\n      return;\n    }\n    \n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      used[i] = true;\n      path.push(nums[i]);\n      backtrack(path, used);\n      path.pop();\n      used[i] = false;\n    }\n  }\n  \n  backtrack([], new Array(nums.length).fill(false));\n  return result;\n}\n\n// Subsets\nfunction subsets(nums) {\n  const result = [];\n  \n  function backtrack(start, path) {\n    result.push([...path]);\n    for (let i = start; i < nums.length; i++) {\n      path.push(nums[i]);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  \n  backtrack(0, []);\n  return result;\n}",
        language: "javascript",
        timeComplexity: "O(n!)",
        spaceComplexity: "O(n)",
        keyInsights: [
          "Backtracking = Recursion + Choice + Undo",
          "Template: make choice → recurse → undo choice",
          "Pruning invalid branches early is key to efficiency",
        ],
      },
    ],
  },
  {
    id: "bit-manipulation",
    slug: "bit-manipulation",
    title: "Bit Manipulation",
    description:
      "Solve problems efficiently using bitwise operations and masks.",
    icon: "Binary",
    difficulty: "advanced",
    color: "from-teal-500 to-cyan-500",
    totalProblems: 20,
    lessons: [
      {
        id: "bit-1",
        title: "Bit Operations",
        slug: "operations",
        description:
          "AND, OR, XOR, NOT, shifts, and common bit tricks.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Common bit operations\nconst a = 5;  // 101\nconst b = 3;  // 011\n\nconsole.log(a & b);   // 1 (AND)\nconsole.log(a | b);   // 7 (OR)\nconsole.log(a ^ b);   // 6 (XOR)\nconsole.log(~a);      // -6 (NOT)\nconsole.log(a << 1);  // 10 (left shift)\nconsole.log(a >> 1);  // 2  (right shift)\n\n// Check if power of 2\nfunction isPowerOfTwo(n) {\n  return n > 0 && (n & (n - 1)) === 0;\n}\n\n// Count set bits\nfunction countBits(n) {\n  let count = 0;\n  while (n) {\n    n &= n - 1;\n    count++;\n  }\n  return count;\n}",
        language: "javascript",
        keyInsights: [
          "XOR a number with itself gives 0: a ^ a = 0",
          "n & (n-1) removes the lowest set bit",
          "Bit masks can represent subsets efficiently",
        ],
      },
    ],
  },
  {
    id: "tries",
    slug: "tries",
    title: "Tries",
    description:
      "Build prefix trees for efficient string storage, search, and autocomplete systems.",
    icon: "TreeDeciduous",
    difficulty: "advanced",
    color: "from-pink-500 to-rose-500",
    totalProblems: 15,
    lessons: [
      {
        id: "trie-1",
        title: "Trie Implementation",
        slug: "implementation",
        description:
          "Build a trie from scratch and understand its operations.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "class TrieNode {\n  constructor() {\n    this.children = {};\n    this.isEnd = false;\n  }\n}\n\nclass Trie {\n  constructor() {\n    this.root = new TrieNode();\n  }\n  \n  insert(word) {\n    let node = this.root;\n    for (const char of word) {\n      if (!node.children[char]) {\n        node.children[char] = new TrieNode();\n      }\n      node = node.children[char];\n    }\n    node.isEnd = true;\n  }\n  \n  search(word) {\n    let node = this.root;\n    for (const char of word) {\n      if (!node.children[char]) return false;\n      node = node.children[char];\n    }\n    return node.isEnd;\n  }\n  \n  startsWith(prefix) {\n    let node = this.root;\n    for (const char of prefix) {\n      if (!node.children[char]) return false;\n      node = node.children[char];\n    }\n    return true;\n  }\n}",
        language: "javascript",
        timeComplexity: "Insert/Search: O(m) where m = word length",
        spaceComplexity: "O(ALPHABET_SIZE × m × n)",
        keyInsights: [
          "Trie reduces string comparison from O(m) to O(1) per character",
          "Perfect for prefix-based operations (autocomplete, spell check)",
          "Space can be optimized with compressed tries (radix trees)",
        ],
      },
    ],
  },
  {
    id: "union-find",
    slug: "union-find",
    title: "Union Find",
    description:
      "Efficiently track connected components with path compression and union by rank.",
    icon: "Merge",
    difficulty: "advanced",
    color: "from-emerald-500 to-green-500",
    totalProblems: 15,
    lessons: [
      {
        id: "uf-1",
        title: "Disjoint Set Union",
        slug: "dsu",
        description:
          "Implementation with path compression and union by rank.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "class UnionFind {\n  constructor(n) {\n    this.parent = Array.from({ length: n }, (_, i) => i);\n    this.rank = new Array(n).fill(0);\n    this.components = n;\n  }\n  \n  find(x) {\n    if (this.parent[x] !== x) {\n      this.parent[x] = this.find(this.parent[x]); // Path compression\n    }\n    return this.parent[x];\n  }\n  \n  union(x, y) {\n    const px = this.find(x);\n    const py = this.find(y);\n    if (px === py) return false;\n    \n    // Union by rank\n    if (this.rank[px] < this.rank[py]) {\n      this.parent[px] = py;\n    } else if (this.rank[px] > this.rank[py]) {\n      this.parent[py] = px;\n    } else {\n      this.parent[py] = px;\n      this.rank[px]++;\n    }\n    this.components--;\n    return true;\n  }\n  \n  connected(x, y) {\n    return this.find(x) === this.find(y);\n  }\n}",
        language: "javascript",
        timeComplexity: "O(α(n)) amortized — nearly O(1)",
        spaceComplexity: "O(n)",
        keyInsights: [
          "Path compression + union by rank → nearly O(1) operations",
          "Used in Kruskal's MST, connected components, cycle detection",
          "Amortized complexity involves inverse Ackermann function α(n)",
        ],
      },
    ],
  },
  {
    id: "recursion",
    slug: "recursion",
    title: "Recursion",
    description:
      "Master the foundation of many algorithms — recursive thinking and call stack visualization.",
    icon: "Repeat",
    difficulty: "beginner",
    color: "from-blue-400 to-indigo-500",
    totalProblems: 20,
    lessons: [
      {
        id: "rec-1",
        title: "Recursion Fundamentals",
        slug: "fundamentals",
        description:
          "Base cases, recursive cases, and visualizing the call stack.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Factorial\nfunction factorial(n) {\n  if (n <= 1) return 1; // Base case\n  return n * factorial(n - 1); // Recursive case\n}\n\n// Reverse a string\nfunction reverseString(s) {\n  if (s.length <= 1) return s;\n  return reverseString(s.slice(1)) + s[0];\n}\n\n// Tree traversal (natural recursion)\nfunction sumTree(node) {\n  if (!node) return 0;\n  return node.val + sumTree(node.left) + sumTree(node.right);\n}",
        language: "javascript",
        keyInsights: [
          "Every recursive function needs a base case to terminate",
          "Recursion uses the call stack — deep recursion can cause stack overflow",
          "Think: what is the smallest subproblem? That's your base case.",
        ],
      },
    ],
  },
  {
    id: "divide-and-conquer",
    slug: "divide-and-conquer",
    title: "Divide & Conquer",
    description:
      "Split problems into smaller subproblems, solve independently, and combine results.",
    icon: "Split",
    difficulty: "intermediate",
    color: "from-violet-400 to-purple-600",
    totalProblems: 15,
    lessons: [
      {
        id: "dc-1",
        title: "D&C Pattern",
        slug: "pattern",
        description:
          "The divide and conquer paradigm with classic examples.",
        content: "LESSON_CONTENT_PLACEHOLDER",
        codeExample:
          "// Merge Sort (classic D&C)\nfunction mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  \n  // Divide\n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  \n  // Conquer (merge)\n  return merge(left, right);\n}\n\n// Power function (fast exponentiation)\nfunction power(base, exp) {\n  if (exp === 0) return 1;\n  if (exp % 2 === 0) {\n    const half = power(base, exp / 2);\n    return half * half;\n  }\n  return base * power(base, exp - 1);\n}",
        language: "javascript",
        keyInsights: [
          "Divide: split problem into equal subproblems",
          "Conquer: solve subproblems recursively",
          "Combine: merge subproblem solutions into final answer",
        ],
      },
    ],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}

export function getLessonBySlug(
  topicSlug: string,
  lessonSlug: string
): Lesson | undefined {
  const topic = getTopicBySlug(topicSlug);
  return topic?.lessons.find((lesson) => lesson.slug === lessonSlug);
}

export function getTotalLessons(): number {
  return topics.reduce((acc, topic) => acc + topic.lessons.length, 0);
}

export function searchTopicsAndLessons(query: string) {
  const lowerQuery = query.toLowerCase();
  return topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(lowerQuery) ||
      topic.description.toLowerCase().includes(lowerQuery) ||
      topic.lessons.some(
        (lesson) =>
          lesson.title.toLowerCase().includes(lowerQuery) ||
          lesson.description.toLowerCase().includes(lowerQuery)
      )
  );
}
