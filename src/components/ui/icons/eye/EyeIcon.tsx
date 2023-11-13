import { FC } from 'react'

import { determineVersion } from '@/components/ui/icons/settingsIcons'
import { IconProps } from '@/components/ui/icons/typeIcons'

import s from '../Icons.module.scss'

export const EyeIcon: FC<IconProps> = ({ color = '', version = 'dark', ...rest }) => {
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
        d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
        fill={color ? color : determineVersion(version)}
      />
      <path
        d="M21.87 11.5C21.23 10.39 17.71 4.81999 11.73 4.99999C6.2 5.13999 3 9.99999 2.13 11.5C2.04223 11.652 1.99603 11.8245 1.99603 12C1.99603 12.1755 2.04223 12.348 2.13 12.5C2.76 13.59 6.13 19 12.02 19H12.27C17.8 18.86 21.01 14 21.87 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.87 11.5ZM12 15.5C11.3078 15.5 10.6311 15.2947 10.0555 14.9101C9.47993 14.5256 9.03133 13.9789 8.76642 13.3394C8.50151 12.6998 8.4322 11.9961 8.56725 11.3172C8.7023 10.6382 9.03564 10.0146 9.52513 9.52512C10.0146 9.03564 10.6383 8.70229 11.3172 8.56724C11.9961 8.4322 12.6999 8.50151 13.3394 8.76641C13.9789 9.03132 14.5256 9.47993 14.9101 10.0555C15.2947 10.6311 15.5 11.3078 15.5 12C15.5 12.9283 15.1313 13.8185 14.4749 14.4749C13.8185 15.1312 12.9283 15.5 12 15.5Z"
        fill={color ? color : determineVersion(version)}
      />
    </svg>
  )
}
