import {flag} from '../src/globals'
import * as React from 'react'
import {ReactNode, SVGProps} from 'react'
import st from '../flags/st'


interface Props extends SVGProps<SVGGElement> {
  /* An array containing all the successive colors.*/
  colors: string[]
  /* If you wish to repeat the stripes for a greater amount than there is colors (eg. US flag) */
  count?: number
  /* A children SVG node that will be inserted at the end of the <g> group */
  children?: ReactNode
}

export default ({colors = [], count, children, ...props}: Props) => {

  const numberOfStripes = count || colors.length
  const stripeHeight = Math.ceil(flag.height / numberOfStripes)

  const pathsByColor: { [key: string]: string[] } = {};

  [...Array(numberOfStripes)].forEach((_, i) => {
    const y = stripeHeight * i + stripeHeight / 2
    const color = colors[i % colors.length]

    if(!pathsByColor[color]) {
      pathsByColor[color] = []
    }

    pathsByColor[color].push(`M ${0} ${y} ${flag.width} ${y}`)
  })

  return <g strokeWidth={stripeHeight} {...props}>
    {Object.entries(pathsByColor).map(([color, paths]) => {
      console.log(paths)
      return <path
        key={color}
        stroke={color}
        d={paths.join(' ')}
      />
    })}
    {children}
  </g>
}