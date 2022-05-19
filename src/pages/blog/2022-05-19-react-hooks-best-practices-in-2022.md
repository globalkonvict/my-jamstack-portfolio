---
templateKey: blog-post
title: React Hooks Best Practices in 2022
date: 2022-05-19T17:44:11.067Z
description: Class-based components previously had access to React capabilities
  like state and lifecycle functions. For this reason, function-based components
  are called “thin, or purely presentational” since they cannot access state and
  lifecycle functions.
featuredpost: false
featuredimage: /img/react-hooks-main-image.png
tags:
  - react
  - programming
  - tutorial
  - tips
---
Class-based components previously had access to React capabilities like state and lifecycle functions. For this reason, function-based components are called “thin, or purely presentational” since they cannot access state and lifecycle functions.

Since React Hooks was released, function-based components have become first-class citizens of React. Moreover, some companies offering services in React development. Also they provide [dedicated React developers for hiring](https://bosctechlabs.com/hire-react-developer/) who can help throughout your development journey. New methods to compose, reuse, and share React code has been made possible thanks to function components.

### Simple Example of Hook

```javascript
import React, { useState } from 'react';

function Example() {
// Declare a new state variable, which we'll call "count"
const [count, setCount] = useState(0);

return (
<div>

You clicked {count} times

<button> setCount(count + 1)}&gt;
Click me
</button>

</div>
);
}
```

### Output:

![](https://res.cloudinary.com/practicaldev/image/fetch/s--cw4rxkOt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tp4z5q4p1fotw8h4mc8q.png)

