import Notfound from './not-Found';
import React from 'react';

const ReviewId: React.FC<{ params: { productId: string, reviewId: string } }> = ({ params }) => {
    
    if(parseInt(params.reviewId) > 1000) {
        // Notfound()
        return <Notfound    />
    }
    return (
        <>
            <h1>Review {params.reviewId} for product {params.productId}</h1>
        </>
    );
};

export default ReviewId;
