import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { purple, green} from '@material-ui/core/colors'

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
    MuiTextField: {
      root: {
        margin: 10
      }
    }
  }
})

export default theme;