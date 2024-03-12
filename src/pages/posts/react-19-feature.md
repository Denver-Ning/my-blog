---
layout: ../../layouts/MarkdownPostLayout.astro
title: React-19-feature
pubDate: 2024-03-012
description: 'react 19 新特性'
author: 帅宁
tags: ['react']
---

## use() Hook

`use` Hook 目前仅在React的Canary和实验通道中可用，可以在[React’s release channels here](https://react.dev/community/versioning-policy#all-release-channels) 了解有关React发布渠道的更多信息

### 案例代码1

```jsx
import { useEffect, useState } from 'react';

const JokeItem = ({ joke }) => {
  return (
    <div className='bg-blue-50 shadow-md p-4 my-6 rounded-lg'>
      <h2 className='text-xl font-bold'>{joke.value}</h2>
    </div>
  );
};

const Joke = () => {
  const [joke, setJoke] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await res.json();
        setJoke(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJoke();
  }, []);

  if (loading) {
    return <h2 className='text-2xl text-center font-bold mt-5'>Loading...</h2>;
  }

  return <JokeItem joke={joke} />;
};
export default Joke;

```

```jsx
import { use, Suspense } from 'react';

const fetchData = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  return res.json();
};

const JokeItem = () => {
  const joke = use(fetchData());
  return (
    <div className='bg-blue-50 shadow-md p-4 my-6 rounded-lg'>
      <h2 className='text-xl font-bold'>{joke.value}</h2>
    </div>
  );
};

const Joke = () => {
  return (
    <Suspense
      fallback={
        <h2 className='text-2xl text-center font-bold mt-5'>Loading...</h2>
      }
    >
      <JokeItem />
    </Suspense>
  );
};
export { Joke as UseExample1 };

```

在第一个代码示例中，我们使用了`useState`和`useEffect`两个常用的Hooks。`useState`允许我们在函数组件中声明和使用状态，而`useEffect`允许我们在组件渲染完成后执行副作用操作。

在第二个代码示例中，我们使用了`Suspense`组件和`use`函数来展示数据获取的并发模式。通过将异步数据获取逻辑封装在`fetchData`函数中，并在`JokeItem`组件中使用`use(fetchData())`，我们可以实现在数据加载期间显示加载状态，而不会阻塞用户界面。`Suspense`组件提供了一个`fallback`属性，用于指定在数据加载期间显示的加载状态。

这就方便了许多 不再需要`useEffect` 中等待加载数据设置loading状态，也省略了许多

### 案例代码2

```jsx
import { use, useState, Suspense } from 'react';

// Simulate fetching a message
function fetchMessage() {
  return new Promise((resolve) => setTimeout(resolve, 1000, '⚛️'));
}

// MessageOutput component
const MessageOutput = ({ messagePromise }) => {
  const messageContent = use(messagePromise);
  return <p className='text-xl'>Here is the message: {messageContent}</p>;
};

// MessageContainer component
const MessageContainer = ({ messagePromise }) => {
  return (
    <Suspense fallback={<p className='text-xl'>⌛Downloading message...</p>}>
      <MessageOutput messagePromise={messagePromise} />
    </Suspense>
  );
};

// Message component
const Message = () => {
  const [messagePromise, setMessagePromise] = useState(null);

  const [show, setShow] = useState(false);

  function download() {
    setMessagePromise(fetchMessage());
    setShow(true);
  }

  if (show) {
    return <MessageContainer messagePromise={messagePromise} />;
  } else {
    return (
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={download}
      >
        Download message
      </button>
    );
  }
};

export { Message as UseExample2 };
```

定义`fetchMessage`函数，用于模拟获取消息的异步操作。

然后，定义的`MessageOutput`组件，它接收一个`messagePromise`作为属性，并使用`use`函数来获取异步消息的内容。在组件中，展示了消息内容。

接着，我们定义了`MessageContainer`组件，它接收一个`messagePromise`作为属性，并使用`Suspense`组件来处理异步加载。在加载期间，我们展示了一个加载状态的提示信息。一旦消息加载完成，我们渲染`MessageOutput`组件来显示消息内容。

最后，我们定义了`Message`组件，它使用`useState`来管理状态。我们声明了`messagePromise`和`show`两个状态变量。当用户点击"Download message"按钮时，我们调用`download`函数来设置`messagePromise`并将`show`状态设置为`true`。当`show`为`true`时，我们渲染`MessageContainer`组件来展示消息内容。否则，我们渲染一个按钮，点击该按钮会触发下载操作。

`use`函数允许我们在组件中使用异步操作，并在数据加载完成后获取数据。`Suspense`组件用于处理异步加载，在加载期间显示加载状态