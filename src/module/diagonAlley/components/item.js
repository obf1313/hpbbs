import React,{Component} from 'react'
import {Card,Button,Row} from 'antd'
import {toCart} from '../actions'
import { connect } from 'react-redux'
import {findDOMNode} from 'react-dom'
import {
    DragSource,
    DropTarget,
} from 'react-dnd'

const {Meta} = Card
const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
        toCart: (params)=>{
            dispatch(toCart(params))
        }
    }
}

// 拖拽
const Types = { // 设定类型，只有DragSource和DropTarget的类型相同时，才能完成拖拽和放置
    CARD: 'CARD'
}

const CardSource = {
    beginDrag(props,monitor,component){
        return {
            index:props.index
        }
    }
}
const CardTarget = {
    hover(props,monitor,component){ //组件在target上方时触发的事件
        if(!component) return null;
        const dragIndex = monitor.getItem().index;//拖拽目标的Index
        const hoverIndex = props.index; //目标Index
        if(dragIndex === props.lastIndex || hoverIndex === props.lastIndex) return null;
        if(dragIndex === hoverIndex) {return null}//如果拖拽目标和目标ID相同不发生变化
        const hoverBoundingRect = (findDOMNode(component)).getBoundingClientRect();//获取卡片的边框矩形
        const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;//获取X轴中点
        const clientOffset = monitor.getClientOffset();//获取拖拽目标偏移量
        const hoverClientX = (clientOffset).x - hoverBoundingRect.left;
        if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
            return null
        }
        if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
            return null
        }
        props.onDND(dragIndex,hoverIndex);
        monitor.getItem().index = hoverIndex;
    },
}

function targetCollect(connect,monitor) {
    return{
        connectDropTarget:connect.dropTarget(),
        isOver:monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType(),
    }
}
function sourceCollect(connect,monitor) {
    return{
        connectDragSource:connect.dragSource(),
        isDragging:monitor.isDragging()
    }
}

class ItemModal extends Component {
    render() {
        const { toCart,item,isDragging, connectDragSource, connectDropTarget} = this.props
        let opacity = isDragging ? 0.1 : 1
        return connectDragSource( //使用DragSource 和 DropTarget
            connectDropTarget(<div>
                <Card
                    hoverable
                    style={{ width: 300, margin: '20px 20px',opacity}}
                    cover={<img alt="example" src={item.imgUrl} />}
                >
                    <Meta
                        title={item.title}
                        description={item.price}
                    />
                    <Row type="flex" justify="end">
                        <Button size="small" style={{marginRight: 10}} onClick={()=>toCart(item)}>加入购物车</Button>
                        <Button size="small" type="primary">立即购买</Button>
                    </Row>
                </Card>
                </div>
        ))
    }
}

const Item = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemModal)

export default DropTarget(Types.CARD,CardTarget,targetCollect)(DragSource(Types.CARD,CardSource,sourceCollect)(Item))