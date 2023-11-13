import { FC } from 'react'

import { determineVersion } from '@/components/ui/icons/settingsIcons'
import { IconProps } from '@/components/ui/icons/typeIcons'

import s from '../Icons.module.scss'

export const MenuIcon: FC<IconProps> = ({ color = '', version = 'dark', ...rest }) => {
  return (
    <svg
      {...rest}
      className={`${s.svg} ${rest.className} `}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.05 11H3.95C3.42533 11 3 11.4253 3 11.95V12.05C3 12.5747 3.42533 13 3.95 13H20.05C20.5747 13 21 12.5747 21 12.05V11.95C21 11.4253 20.5747 11 20.05 11Z"
        fill={color ? color : determineVersion(version)}
      />
      <path
        d="M20.05 16H3.95C3.42533 16 3 16.4253 3 16.95V17.05C3 17.5747 3.42533 18 3.95 18H20.05C20.5747 18 21 17.5747 21 17.05V16.95C21 16.4253 20.5747 16 20.05 16Z"
        fill={color ? color : determineVersion(version)}
      />
      <path
        d="M20.05 6H3.95C3.42533 6 3 6.42533 3 6.95V7.05C3 7.57467 3.42533 8 3.95 8H20.05C20.5747 8 21 7.57467 21 7.05V6.95C21 6.42533 20.5747 6 20.05 6Z"
        fill={color ? color : determineVersion(version)}
      />
    </svg>
  )
}
