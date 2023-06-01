import * as Tooltip from '@radix-ui/react-tooltip'
import { styled, keyframes } from '../../styles'

const slideUpAndFade = keyframes({
    from: {
      opacity: 0,
      transform: 'translateY(2px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    }
})
  
const slideRightAndFade  = keyframes({
    from:{
      opacity: 0,
      transform: 'translateX(-2px)'
    },
    to:{
      opacity: 1,
      transform: 'translateX(0)'
    }
})
  
const slideDownAndFade  =  keyframes({
    from: {
      opacity: 0,
      transform: 'translateY(-2px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    }
})
  
const slideLeftAndFade   =  keyframes({
    from: {
      opacity: 0,
      transform: 'translateX(2px)'
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)'
    }

})

export const TooltipContent = styled(Tooltip.Content, {
    borderRadius: 4,
    padding: '10 15',
    fontSize: 15,
    lineHeight: 1,
    color: '#FFF',
    backgroundColor: 'white',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    userSelect: 'none',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',

    '&[data-state="delayed-open"][data-side="top"]': {
        animationName: `${slideDownAndFade}`,
    },

    '&[data-state="delayed-open"][data-side="right"]':{
        animationName: `${slideLeftAndFade}`,
    },

    '&[data-state="delayed-open"][data-side="bottom"]': {
        animationName: `${slideUpAndFade}`
    },

    "&[data-state='delayed-open'][data-side='left']": {
        animatioName: `${slideRightAndFade}`
    }
      
    


})

export const ToolTipArrow = styled(Tooltip.Arrow, {
    fill: 'white'
})


