import React from "react";

export const sleep = (val: number) => new Promise((resolve) => (
  val != null ? setTimeout(resolve, val) : resolve(void 0)
));

export function gaussianRnd(mean: number, std: number) {
  const times = 12;
  let sum = 0;
  for (let idx = 0; idx < times; idx++) {
    sum += Math.random();
  }
  sum -= (times / 2);
  return Math.round((sum) * std) + mean;
}

export function eachPromise(arr: string[] | string, iterator: (current: string, id: number) => void) {
  const promiseReducer = (prev: Promise<unknown>, current: string, idx: number) => (
    prev.then(() => {
      return iterator(current, idx)
})
  )

  return Array.from(arr).reduce(promiseReducer, Promise.resolve())
}

export function exclude(obj: Record<string, unknown>, keys: string[]) {
  const res: Record<string, unknown> = {};
  for (const key in obj) {
    if (keys.indexOf(key) === -1) {
      res[key] = obj[key];
    }
  }
  return res;
}

export function extractTextFromElement(element: React.ReactNode) {
  const stack = element ? [element] : [];
  const lines = [] as string[];

  while (stack.length > 0) {
    const current = stack.pop();
    if (React.isValidElement(current)) {
        React.Children.forEach(current.props.children, (child) => {
          stack.push(child);
        });
    } else if (Array.isArray(current)) {
      for (const el of current) {
        stack.push(el);
      }
    } else {
      lines.unshift(current as string);
    }
  }

  return lines;
}

export function cloneElement(element: React.ReactElement, children: React.ReactNode[]) {
  const tag = element?.type;
  const props = exclude(element?.props, ['children']);
  const getMilliseconds = new Date().getUTCMilliseconds();
  const randomStamp = getMilliseconds + Math.random() + Math.random();
  // eslint-disable-next-line
  props['key'] = `Typist-element-${tag}-${randomStamp}`;


  return React.createElement(tag, props, ...children);
}

function cloneElementWithSpecifiedTextAtIndex(element: React.ReactNode, textLines: string[], textIdx: number): [React.ReactNode | string | null, number] {
  if (textIdx >= textLines.length) {
    return [null, textIdx] as [null, number];
  }

  let idx = textIdx;
  const recurse = (el: React.ReactNode) => {
    const [child, advIdx] = cloneElementWithSpecifiedTextAtIndex(
      el,
      textLines,
      idx
    );
    idx = advIdx;
    return child;
  };

  const isNonTypistElement = (React.isValidElement(element));

  if (isNonTypistElement) {
    const clonedChildren = React.Children.map(element.props.children, recurse) || [];
    return [cloneElement(element, clonedChildren), idx] as [React.ReactNode, number];
  }

  if (Array.isArray(element)) {
    const children = element.map(recurse);
    return [children, idx] as [React.ReactNode, number];
  }

  // Anything that isn't a React element or an Array is interpreted as text
  return [textLines[idx], idx + 1] as [string, number];
}

export function cloneElementWithSpecifiedText({ element, textLines } : { element: React.ReactNode, textLines: string[] }) {
  if (!element) {
    return undefined;
  }

  return cloneElementWithSpecifiedTextAtIndex(element, textLines, 0)[0];
}
