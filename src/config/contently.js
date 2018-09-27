let devConfig

if (process.env.NODE_ENV === "development"){
    devConfig = require('./devContently').default
}

const contentlyConfig = {
    space: process.env.SPACE || devConfig.space,
    accessToken: process.env.TOKEN || devConfig.accessToken
}

export default contentlyConfig