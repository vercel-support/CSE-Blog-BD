---
title: "Contributing"
---

এই ব্লগটি [এই Github Repository](https://github.com/S-Nakib/oscseb) তে রাখা আছে। ওই Repository এর root এ 'posts' directory তে ব্লগ পোষ্ট গুলো Markdown(.md) Syntax এ লেখা আছে। ওয়েবসাইট বিল্ড হবার সময় ওই markdown কে parse করে html এ convert করা হয়।
এই 'posts' Directory তে যে Structure এ Markdown ফাইল গুলো আছে ওয়েবসাইট টা ঠিক সেভাবেই Build হয়। অর্থাৎ যদি 'posts' Directory তে, একটা Subdirectory 'a' তে একটা Markdown ফাইল 'b' রাখা হয় তাহলে ওয়েবসাইট এ 'Domain/a/b' page তৈরি হবে এবং ওই পেইজ এ ওই Markdown ফাইল এর Content গুলো থাকবে।

এখন এই ব্লগে নতুন কোন পোষ্ট লিখা বা Existing কোন লিখা Edit করতে চাইলে এই রিপোজিটরি টি Fork করে আপনার ইচ্ছেমত Change করে যেমন নতুন পোষ্ট লিখা বা কোন পোষ্ট Edit করা ইত্যাদি করে Pull Request পাঠাতে পারেন।

Markdown Syntax সাধারণত Programmer/Developer দের অনেক পরিচিত। তাছাড়া Markdown Syntax খুবই easy, একটু গুগল করলেই অল্প সময়ে অনেক কিছু আয়ত্ত করা যায় তাছাড়া ব্লগ পোষ্ট এর জন্য তেমন কিছু জানতেও হয় না। এবং মজার ব্যাপার হচ্ছে Markdown এ চাইলে HTML tag ও ব্যবহার করা যায়।  
[Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)

<br/>

### Syntax Highlighting

এটা যেহেতু CSE Related ব্লগ তাই কোন প্রোগ্রামিং Related পোষ্ট এ কোড লিখার প্রয়োজন হতে পারে। আর কোড এর ক্ষেত্রে Syntax Highlighting একটি গুরত্বপূর্ন বিষয়। Markdown File এ Syntax Highlight করা খুব সহজ। এটার একটা ধারনা পাওয়া যাবে [এখান থেকে](https://docs.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks#syntax-highlighting)

<br/>

### পোষ্ট এর Metadata

একটি পোষ্ট এ পোষ্ট এর content এর পাশাপাশি কিছু metadata ও Add করার প্রয়োজন থাকে, যেমন পোষ্ট কে লিখেছেন, কখন লিখেছেন, অন্য কেউ এডিট করতে পারবে কিনা ইত্যাদি। এগুলো চাইলে পোষ্ট এর ভেতরেই ঢুকিয়ে দেয়া যায় তবে এটা দেখতে বাজে দেখাবে তাই এ তথ্যগুলো পোষ্ট এর উপরে YAML ফরমেট এ লিখতে হবে।
সাইট বিল্ড করার সময় এ metadata গুলো extract করে নেয়া হবে এবং এগুলো অবশ্যই ওয়েবসাইট এ দেখানো হবে।  
YAML খুবই সহজ। এখানে তথ্যগুলো Key-Value আকারে থাকে, শুরুতে ও শেষে "---" দিতে হয়।  
যেমন

title: "The awesome post"  
creator: "S-Nakib"  
contributors: "alice bob abc xyz"  
permission: "Others may edit"  
description: "... ... ..."

উপরের এই ৫ টি key-value pair হল Metadata. অবশ্যই এদের আগে এবং পরে আলাদা লাইন এ "---" দিতে হবে Double Quote ছাড়া।  
এখানে title, creator আর contributors key গুলো Special. এদের যেভাবে lowercase এ দেয়া আছে সেভাবেই রাখতে হবে। title এর ভ্যালু extract করে h1 tag এ দেয়া হবে। আর creator এবং contributors থেকে value গুলো extract করে এদের github link পোষ্ট এর শুরুতে এড করে দেয়া হবে। এজন্য এখানে creator এবং contributors এ নামগুলো github username হতে হবে।
creator হচ্ছেন যিনি পোষ্ট টি তৈরি করেছেন। আর contributors হচ্ছেন যিনি পরবর্তীতে পোষ্ট টি edit করেছেন।
একাধিক contributors থাকলে তাদের github username একটা space দিয়ে separate করে লিখতে হবে। যেমন এখানে creator হচ্ছে S-Nakib. এটা একটা github username. ওয়েবসাইট Build হবার সময় এটা হবে এরকম <a href="https://github.com/S-Nakib">S-Nakib</a>.  
Contributors এর ক্ষেত্রে ও সেইম।

permission বা এরকম কোন key দিয়ে যদি স্পষ্টভাবে বলে দেয়া না হয় যে অন্যরা এডিট করতে পারবে কিনা তাহলে ওই পোষ্ট অন্য কেও এডিট করতে পারবে না।

এখন এটা Practically দেখার জন্য ওয়েবসাইট থেকে [এই পোষ্ট](http://localhost:3000/programming_language/javascript/node.js/node.js_architecture_resources) এবং Repository থেকে github থেকে ওই পোষ্ট এর raw markdown ফাইল দেখে আসলেই বিষয়টা অনেকটা পরিষ্কার হবে।

এরপরেও কোন কিছু বুঝতে সমস্যা হলে আমাদের সাথে [Contact](./contact_us) করতে পারেন।

প্রত্যেক subdirectory তে একটি করে index.md ফাইল আছে যেটাতে ওই directory এর সবগুলো পোষ্ট এর লিংক থাকবে। তাই নতুন কোন পোষ্ট লিখার পর তা ওই Directory এর index.md থেকে লিংক করে দিতে হবে, নইলে ওয়েবসাইট ভিসিটর রা ওই পোষ্ট খুজে পাবে না।  
এক্ষেত্রে নতুন কোন Directory এড করলে ওটাতে অবশ্যই index.md ফাইল ও এড করতে হবে।

কোন পোষ্ট লিখার পর তা ওয়েবসাইট এ কিভাবে দেখাচ্ছে তা Locally দেখা যাবে, এর জন্য npm install করে নিতে হবে।
তারপর npm এর Package গুলো Download করে নিতে হবে `npm install` command এর মাধ্যমে।  
এরপর project root থেকে `npm run dev` commnd করলে localhost এর কোন একটা পোর্ট এ ওই ওয়েবসাইট টা browse করা যাবে। Pull Request করার আগে ভাল করে দেখে নিতে হবে যে localhost এ ওই পেজটা ঠিকভাবে load হচ্ছে কিনা।
এছাড়া ঠিকভাবে build হবে কিনা তা দেখতে `npm run build` command করা যেতে পারে।
