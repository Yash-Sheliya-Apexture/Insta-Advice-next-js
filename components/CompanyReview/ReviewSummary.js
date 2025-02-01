// components/ReviewSummary.js
import React from 'react';
import styles from './ReviewSummary.module.css';

const ReviewSummary = ({ content }) => {
    return (
        <div className={`${styles['review-summary']} review-summary-wrap`}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default ReviewSummary;