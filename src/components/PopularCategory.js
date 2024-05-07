import React from 'react';

const PopularCategory = ({ buyData, sellData, rentData, bnbData }) => {
  const findMostPopularCategory = (data) => {
    // Assuming each data object has a 'category' property indicating the category of house
    // and a 'popularity' property indicating its popularity
    const mostPopularCategory = data.reduce((prev, current) =>
      (prev.popularity > current.popularity) ? prev : current, data[0]);
    return mostPopularCategory.category;
  }

  return (
    <div className="popular-categories">
      <h2>Most Popular Categories</h2>
      <div className="category">
        <h3>Buy</h3>
        <p>Most Popular Category: {findMostPopularCategory(buyData)}</p>
      </div>
      <div className="category">
        <h3>Sell</h3>
        <p>Most Popular Category: {findMostPopularCategory(sellData)}</p>
      </div>
      <div className="category">
        <h3>Rent</h3>
        <p>Most Popular Category: {findMostPopularCategory(rentData)}</p>
      </div>
      <div className="category">
        <h3>BnB</h3>
        <p>Most Popular Category: {findMostPopularCategory(bnbData)}</p>
      </div>
    </div>
  );
};

export default PopularCategory;
