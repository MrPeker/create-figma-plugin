/** @jsx h */
import { h } from 'preact'
import styles from './svg.scss'

export const imageIcon = (
  <svg class={styles.svg}>
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M13 3H3v6.29289l2.14645-2.14644L5.5 6.79289l.35355.35356L11.7071 13H13V3zm-2.7071 10L5.5 8.20711 3 10.7071V13h7.2929zM3 2c-.55228 0-1 .44772-1 1v10c0 .5523.44772 1 1 1h10c.5523 0 1-.4477 1-1V3c0-.55228-.4477-1-1-1H3zm7 5c.5523 0 1-.44772 1-1s-.4477-1-1-1c-.55228 0-1 .44772-1 1s.44772 1 1 1zm0 1c1.1046 0 2-.89543 2-2s-.8954-2-2-2c-1.10457 0-2 .89543-2 2s.89543 2 2 2z'
    />
  </svg>
)
