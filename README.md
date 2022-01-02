# react-events-utils

A tiny library providing event utils for react. Makes it easy to pass messages / data without any prop chain in complicated situations.

Event listeners will be automatically cleaned up for you when components unmount.

You can import the following:

## trigger

```js
import { trigger } from "react-events-utils"

const data = { foo: "bar" }

trigger("event-name-here", data)
```

## useDocumentListener

Listen for an event and receive data if needed.

```js
import { useDocumentListener } from "react-events-utils"

useDocumentListener("event-name-here", (event) => {
  const data = event.detail // if you triggered an event with data
  doSomethingWith()
})
```

## useDocumentListenerOnce

Listen for an event once and receive data if needed.

```js
import { useDocumentListenerOnce } from "react-events-utils"

useDocumentListenerOnce("event-name-here", (event) => {
  const data = event.detail // if you triggered an event with data
  doSomethingWith()
})
```