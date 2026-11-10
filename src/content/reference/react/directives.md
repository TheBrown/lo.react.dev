---
title: "Directives"
canary: true
---

<Canary>

These directives are needed only if you're [using React Server Components](/learn/creating-a-react-app#full-stack-frameworks) or building a library compatible with them.

</Canary>

<Intro>

Directives provide instructions to [bundlers compatible with React Server Components](/learn/creating-a-react-app#full-stack-frameworks).

</Intro>

---

## Source code directives {/*source-code-directives*/}

* [`'use client'`](/reference/react/use-client) lets you mark what code runs on the client.
* [`'use server'`](/reference/react/use-server) marks server-side functions that can be called from client-side code.