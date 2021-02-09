import React from 'react';
import { connect } from 'react-redux';
import MenuCard from './MenuCard';

const Menu = (props) => {
    const menuItems = props.menuData.map(m => <MenuCard menu={m} key={m.id} />)
    return (
        menuItems
    )
}

const mapStateToProps = (state) => {
    return {
        menuData: state.menu
    }
}

export default connect(mapStateToProps)(Menu)
