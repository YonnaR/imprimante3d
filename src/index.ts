import App from "./App";
import { APP_PORT } from './utils/env'

//launch app on env port
App.listen(APP_PORT, () => {
    console.log('Express server listening on port ' + APP_PORT );
})