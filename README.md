# react-events-utils

A tiny library providing event utils for react. Makes it easy to pass messages / data without any prop chain in complicated situations by using event listeners using `useDocumentListener` and triggering using the `trigger` function them on the document through custom events.

You can also use other utility functions to listen to regular events, just passing the target to `useEvent` or `useEventOnce`.

Event listeners will be automatically cleaned up for you when components unmount.

## Using regular events

## useEvent

Listen for a specific event on a given target.

```js
import { useEvent } from "react-events-utils"

function SomeComponent () {
  const target = useRef(null)
  useEvent(target, 'click', e => {
    console.log(e)
    doSomething()
  })

  return <div ref={target}>I am the target.</div>
}
```

Alternatively, you can pass `document`, `window`, `document.getElementById("foo")` etc. You get the gist.

## useEventOnce

Same as above, except it will only listen to the event one time.

## Passing data around

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
  doSomethingWithTheData()
})
```

## useDocumentListenerOnce

Same as above, except it will only listen to the event one time.

