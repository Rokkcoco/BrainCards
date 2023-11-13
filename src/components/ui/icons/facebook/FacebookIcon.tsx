import { FC } from 'react'

import { determineVersion } from '@/components/ui/icons/settingsIcons'
import { IconProps } from '@/components/ui/icons/typeIcons'

export const FacebookIcon: FC<IconProps> = ({ color = '', version = 'dark', ...rest }) => {
  return (
    <svg
      {...rest}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_5661_1970)">
        <rect x="8" y="4" width="13" height="20" fill="none" />
        <path
          d="M20.7658 0H3.23417C1.44809 0 0.00012207 1.44791 0.00012207 3.23405V20.7658C0.00012207 22.552 1.44803 23.9999 3.23417 23.9999H11.8807L11.8954 15.4236H9.66733C9.37778 15.4236 9.14276 15.1895 9.14164 14.8999L9.13096 12.1354C9.12984 11.8443 9.36556 11.6077 9.65671 11.6077H11.8808V8.93651C11.8808 5.83661 13.774 4.14869 16.5393 4.14869H18.8084C19.0988 4.14869 19.3342 4.38406 19.3342 4.67444V7.00547C19.3342 7.29573 19.0989 7.53104 18.8087 7.53122L17.4162 7.53187C15.9123 7.53187 15.6211 8.24648 15.6211 9.29522V11.6078H18.9256C19.2405 11.6078 19.4848 11.8827 19.4477 12.1954L19.12 14.9599C19.0887 15.2244 18.8643 15.4237 18.598 15.4237H15.6359L15.6211 24H20.766C22.552 24 23.9999 22.5521 23.9999 20.766V3.23405C23.9999 1.44791 22.552 0 20.7658 0Z"
          fill={color ? color : determineVersion(version)}
        />
      </g>
      <defs>
        <clipPath id="clip0_5661_1970">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
