import React,{Component} from 'react'
import Item from './item'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

var Mock = require('mockjs')
var Random = Mock.Random

class ItemList extends Component{

    constructor() {
        super();
        this.state = {
            itemList: []
        }
    }

    componentDidMount() {
        let itemList = Mock.mock({
            'list|10': [{
                'id|+1': 1,
                'price|1-100.2': 20,
                'title|+1': ["魔杖一","魔法袍二","学习用品三"],
                'imgUrl|+1':[Random.image('300x200'),Random.image('300x200')]
            }]
        })
        this.setState({itemList: itemList.list})
    }

    handleDND = (dragIndex,hoverIndex) => {
        let itemList = this.state.itemList;
        let tmp = itemList[dragIndex] //临时储存文件
        itemList.splice(dragIndex,1) //移除拖拽项
        itemList.splice(hoverIndex,0,tmp) //插入放置项
        console.log('拖拽目标的Index',dragIndex)
        console.log('目标Index',hoverIndex)
        this.setState({itemList})
    }

    render() {
        let itemListHtml = this.state.itemList.map((item,index)=>(
            <Item item={item}
                  key={item.id}
                  index={index}
                  onDND={this.handleDND}
            />
        ))
        return (
            <div style={{padding: 40, display: 'flex',flexWrap: 'wrap'}}>
                {itemListHtml}
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(ItemList)