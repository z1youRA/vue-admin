const steps = (i18n) => [
  {
    element: '#guide', // Query selector string or Node to be highlighted
    stageBackground: '#ffffff', // This will override the one set in driver
    popover: {
      // There will be no popover if empty or not given
      className: 'popover-class', // className to wrap this specific step popover in addition to the general className in Driver options
      title: i18n('driver.guideBtn'),
      description: 'Description', // Body of the popover
      position: 'left'
    }
  },
  {
    element: '#hamburger', // Query selector string or Node to be highlighted
    stageBackground: '#ffffff', // This will override the one set in driver
    popover: {
      // There will be no popover if empty or not given
      className: 'popover-class', // className to wrap this specific step popover in addition to the general className in Driver options
      title: i18n('driver.hamburgerBtn'),
      description: 'Description', // Body of the popover
      position: 'right'
    }
  },
  {
    element: '#fullscreen', // Query selector string or Node to be highlighted
    stageBackground: '#ffffff', // This will override the one set in driver
    popover: {
      // There will be no popover if empty or not given
      className: 'popover-class', // className to wrap this specific step popover in addition to the general className in Driver options
      title: i18n('driver.fullScreen'),
      description: 'Description', // Body of the popover
      position: 'left'
    }
  }
]

export default steps
