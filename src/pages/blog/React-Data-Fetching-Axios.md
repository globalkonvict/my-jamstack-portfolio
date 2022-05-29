---
templateKey: blog-post
title: 'React Data Fetching: Axios'
date: 2022-01-25T07:37:15.623Z
description: Hello there, today we'll go over how to get data in React in the
  simplest way possible utilizing React Hooks (useState and useEffect), the
  axios library, and a mock API (JSON Placeholder
featuredpost: false
featuredimage: /img/react-acticle.png
tags:
  - react
  - programming
  - tutorial
  - tips
---

Hello there, today we'll go over how to get data in React in the simplest way possible utilizing React Hooks (useState and useEffect), the axios library, and a mock API (JSON Placeholder

Let's fetch some data, shall we?\
[![fetch](https://i.giphy.com/media/dPWFfe3tykssE/giphy.gif)](https://i.giphy.com/media/dPWFfe3tykssE/giphy.gif)

Make a directory and create a react app with this command\
`npx create-react-app .`

Install the axios package: `npm install axios`

---

Create a new component and call it whatever you like. I'll call it 'Fetching' for the purposes of this lesson.\
[![Image description](https://res.cloudinary.com/practicaldev/image/fetch/s--eSNHPqFk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g1w59msx4obdih03hz76.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--eSNHPqFk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g1w59msx4obdih03hz76.PNG)

```jsx
import React from 'react';

const Fetching = () => {
  return (
    <div>
      <h1>Fetching my Data</h1>
    </div>
  );
};

export default Fetching;
```

Now we need to construct the method that will retrieve our data from the API.

```jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Fetching() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        console.log(res);
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className='output'>
      <h1>Data Fetching </h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <p>Post id: {post.id}</p>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetching;
```

---

## [](https://dev.to/drsimplegraffiti/react-data-fetching-axios-43i0#import-fetching-into-your-app)Import Fetching into your app

```jsx
import './App.css';
import Fetching from './Fetching';

function App() {
  return (
    <div className='App'>
      <Fetching />
    </div>
  );
}

export default App;
```

---

Source Code link: [Click](https://github.com/drsimplegraffiti/sandbox/tree/main/fetchDataReact)

## [](https://dev.to/drsimplegraffiti/react-data-fetching-axios-43i0#conclusion)Conclusion

I hope you found this article useful. Read more about React Js here:

- [react-search-filter](https://dev.to/drsimplegraffiti/react-search-filter-2ec8)
- [React Conditional Rendering](https://dev.to/drsimplegraffiti/react-conditional-rendering-32b4)
