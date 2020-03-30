import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { CollectionItemContainer, ImageContainer, CollectionFooterContainer, NameSpan, PriceSpan, CollectionItemButton } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
            <CollectionFooterContainer>
                <NameSpan>{name}</NameSpan>
                <PriceSpan>${price}</PriceSpan>
            </CollectionFooterContainer>
            <CollectionItemButton onClick={() => addItem(item)} inverted>Add to cart</CollectionItemButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);