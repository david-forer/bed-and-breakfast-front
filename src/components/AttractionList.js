import React from 'react'
import { connect } from 'react-redux';
import AttractionListCard from './AttractionListCard'

const AttractionList = (props) => {
    const attractionListItems = props.attractionListData.map(a => <AttractionListCard attractions={a} key={a.id}  />)
    return (
        attractionListItems
    )
}

const mapStateToProps = (state) => {
    return {
        attractionListData: state.attractions
    }
}


export default connect(mapStateToProps)(AttractionList)
