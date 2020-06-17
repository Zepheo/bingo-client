import { createMuiTheme } from '@material-ui/core';
import { purple, green} from '@material-ui/core/colors'

import Image from './img/GnomeHeader02-Header-110215.jpg'
console.log(Image)

const theme = createMuiTheme({
  palette:{
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[500]
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover'
        }
      }
    }
  }
})

export default theme;