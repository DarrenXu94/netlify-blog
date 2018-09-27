let devConfig

if (process.env.NODE_ENV === "development"){
    devConfig = require('./devContently').default
}
console.log(process.env)

const contentlyConfig = {
    space: process.env.REACT_APP_SPACE || devConfig.space,
    accessToken: process.env.REACT_APP_TOKEN || devConfig.accessToken
}

export default contentlyConfig