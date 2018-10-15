import * as contentful from 'contentful'
import contentlyConfig from './config/contently'

export default class Contentful{
    constructor(){
        this.client = contentful.createClient(contentlyConfig)
    }

    getEntriesByType = async (type, start) => {
        const entries = await this.client.getEntries({
            content_type:type, 
            order: '-sys.createdAt',
            limit: 5,
            skip: start
        })
        console.log(entries)
        // const newItem = new Item(entries.items[0])
        let entryItems = entries.items.map(item => new Item(item))
        // console.log(entryItems)
        return entryItems
        // return entries.items
    }
}

class Item {
    constructor(rawItem){
        const rawItemObj = this.extractHeader(rawItem.fields.content)
        this.sys = rawItem.sys;
        this.title = rawItem.fields.title;
        this.path = rawItem.fields.path;
        this.headers = rawItemObj.header;
        this.content = rawItemObj.content;
        this.snippet;
        if (this.headers !== null) {
            this.processHeaders()
        }
    }

    /**
     * 
     * @param {*} content 
     * @returns {header, content}
     */
    extractHeader(content) {
        let items = content.split('\n')
        let firstLine = items[0]
        items.shift()
        items = items.join('\n')
        if (firstLine.startsWith('{') && firstLine.endsWith('}')) {
            return { header: firstLine, content: items }
        } else {
            return { header: null, content: content }
        }
    }

    processHeaders() {
        let headers = JSON.parse(this.headers)
        if ('excerpt_separator' in headers) {
            let separator = headers.excerpt_separator
            let splitContent = this.content.split(separator)
            this.snippet = splitContent[0].trim()
            this.content = splitContent[1].trim()
        }
    }
}