import { useState } from 'react'
import { Switch } from '@headlessui/react'

export function SwitchThemeMode() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="mx-auto w-16 h-10 flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-stroke-light' : 'bg-stroke-drak'}
          relative inline-flex items-center h-6 w-16 shrink-0 cursor-pointer rounded-full border-2 border-stroke-drak transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            ${enabled ? 'bg-icon-sun' : 'bg-icon-moon-star' }
            pointer-events-none inline-block h-8 w-8 transform rounded-full bg-white  bg-no-repeat bg-center shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}