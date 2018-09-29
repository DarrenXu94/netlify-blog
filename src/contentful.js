import * as contentful from 'contentful'
import contentlyConfig from './config/contently'

export default class Contentful{
    constructor(){
        this.client = contentful.createClient(contentlyConfig)
    }

    getEntriesByType = async (type) => {
        const entries = await this.client.getEntries({content_type:type, order: '-sys.createdAt'})
        return entries.items
    }
}