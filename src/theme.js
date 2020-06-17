import { createMuiTheme } from '@material-ui/core';
import { purple, green} from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette:{
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[500]
    },
    background: {
      default: 'lightgray'
    }
  }
})

export default theme;