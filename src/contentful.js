import * as contentful from 'contentful'
import contentlyConfig from './config/contently'
import {POSTS_PER_PAGE} from './config/blogConfig'

export default class Contentful{
    constructor(){
        this.client = contentful.createClient(contentlyConfig)
    }

    getEntriesByType = async (type, start) => {
        const entries = await this.client.getEntries({
            content_type:type, 
            order: '-sys.createdAt',
            limit: POSTS_PER_PAGE,
            skip: start
        })
        console.log(entries)
        this.totalProgrammingPosts = entries.total

        // const newItem = new Item(entries.items[0])
        let entryItems = entries.items.map(item => new Item(item))
        // console.log(entryItems)
        return entryItems
        // return entries.items
    }

    getBlogById = async (id) => {
        const entry = await this.client.getEntry(id)
        let entryItem = new Item(entry)
        // console.log(entryItem)
        return entryItem

    }
}

class Item {
    constructor(rawItem){
        if ('content' in rawItem.fields) {
            const rawItemObj = this.extractHeader(rawItem.fields.content)
            this.headers = rawItemObj.header;
            this.content = rawItemObj.content;
            if (this.headers !== null) {
                this.processHeaders()
            }
        } else {
            this.description = rawItem.fields.description;
        }
        this.sys = rawItem.sys;
        this.title = rawItem.fields.title;
        this.path = rawItem.fields.path;
        this.snippet;
        
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
            this.content = splitContent.join('\n')
        }
    }
}