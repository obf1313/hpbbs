import React,{Component} from 'react'
import Item from './item'

var Mock = require('mockjs')
var Random = Mock.Random
export default class ItemList extends Component{
    render() {
        let itemList = Mock.mock({
            'list|10': [{
                'id|+1': 1,
                'price|1-100.2': 20,
                'title|+1': ["魔杖","魔法袍","学习用品"],
                'imgUrl|+1':[Random.image('300x200'),Random.image('300x200')]
            }]
        })
        let itemListHtml = itemList.list.map((item)=>(
            <Item item={item} key={item.id}/>
        ))
        return (
            <div style={{padding: 40, display: 'flex',flexWrap: 'wrap'}}>
                {itemListHtml}
            </div>
        )
    }
}