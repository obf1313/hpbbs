import React from 'react'
import {Row,Button} from 'antd'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        canUndo: state.cartList.past.length > 0,
        canRedo: state.cartList.future.length > 0
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUndo: () => dispatch(UndoActionCreators.undo()),
        onRedo: () => dispatch(UndoActionCreators.redo())
    }
}

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
    <Row>
        <Button onClick={onUndo} disabled={!canUndo} style={{marginRight: 10}}>
            撤销
        </Button>
        <Button onClick={onRedo} disabled={!canRedo}>
            重做
        </Button>
    </Row>
)

UndoRedo = connect(
    mapStateToProps,
    mapDispatchToProps
)(UndoRedo)

export default UndoRedo