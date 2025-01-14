import React from 'react'
import Cursor from './Cursor'
import * as utils from './utils'

interface TypewriterProps {
  children: React.ReactNode
  className?: string
  cursor?: object
  avgTypingDelay?: number
  stdTypingDelay?: number
  onLineTyped?: (line: string, id: number) => void
  onTypingDone?: () => void
  onCharacterTyped?: (char: string, id: number) => void
}

let mounted = false

const Typewriter: React.FC<TypewriterProps> = ({
  children,
  onLineTyped = () => { },
  onTypingDone = () => { },
  onCharacterTyped = () => { },
  className = '',
  cursor = {},
  avgTypingDelay = 70,
  stdTypingDelay = 25,
  ...rest
}) => {
  const linesToType = utils.extractTextFromElement(children)
  const [isDone, setIsDone] = React.useState<boolean>(false)
  const [charIndex, setCharIndex] = React.useState<number[]>([])

  React.useEffect(() => {
    mounted = true

    const localDelayGenerator = () => {
      const mean = avgTypingDelay
      const std = stdTypingDelay

      return utils.gaussianRnd(mean, std) ?? 10;
    }

    const onLocalTypingDone = () => {
      if (!mounted) { return }
      setIsDone(true)
      if (onTypingDone) { onTypingDone() }
    }

    const typeCharacter = (character: string, charIdx: number) => {
      if (!mounted) { return Promise.resolve() }

      return new Promise((resolve) => {
        if (!mounted) { return resolve(void 0)}

        setCharIndex((prev) => {
          if (!prev?.includes(charIdx)) {
            return [...prev, charIdx]
          }
          return prev
        })
        onCharacterTyped(character, charIdx)
        const delay = localDelayGenerator()
        setTimeout(resolve, delay)

      });
    }

    const typeLine = (line: string, lineIdx: number) => {
      if (!mounted) { return Promise.resolve() }

      return new Promise((resolve, reject) => {
        utils.eachPromise(line, typeCharacter)
          .then(() => onLineTyped(line, lineIdx))
          .then(resolve)
          .catch(reject)
      });
    }

    const typeAllLines = (lines = linesToType) => {
      return utils.eachPromise(lines, typeLine)
        .then(() => onLocalTypingDone())
    }

    if (children) {
      typeAllLines()
    } else {
      onLocalTypingDone()
    }
  }, [avgTypingDelay, children, linesToType, onCharacterTyped, onLineTyped, onTypingDone, stdTypingDelay])

  const textLines = charIndex.map((i) => {
    if (typeof children === 'string') {
      return children[i]
    }
  }).join('')

  const innerTree = utils.cloneElementWithSpecifiedText({
    element: children,
    textLines: [textLines],
  });

  return (
    <div className={`Typist ${className}`} {...rest}>
      {innerTree}
      <Cursor isDone={isDone} {...cursor} />
    </div>
  );
}

export default Typewriter;
