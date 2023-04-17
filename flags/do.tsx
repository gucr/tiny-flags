/**
 * Dominican Republic
 *
 */
import React from 'react'
import SvgWrapper from '../tools/SvgWrapper'
import Square from '../tools/Square'
import {reflect} from '../tools/helpers'

export default () => <SvgWrapper>
  <Square fill="#fff"/>
  <g fill="#002d62">
    <path id="do-a" d="m312 192H0V0h312zm21 20h22v22h-17v-17zm31 31h18v14q0 8-10 8h-8zm44 45v192h312V288z"/>
  </g>
  <use href="#do-a" fill="#ce1126" {...reflect({})}/>

  <path fill="#006300" d="m385 216a48 34 0 11-50 0 32 37 0 1050 0"/>

  <g id="b" fill="none" strokeWidth="6">
    <path stroke="#002d62" d="m316 214 15-6-2-3 22-4-1-5h10"/>
    <path stroke="#ce1126" d="m315 265 8 13 2-4 7 10s6-9 28-9"/>
  </g>
  <use href="#b" {...reflect({})}/>
</SvgWrapper>