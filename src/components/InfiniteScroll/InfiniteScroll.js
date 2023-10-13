import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './InfiniteScroll.css';


export const CustomInfiniteScroll = ({ data, fetchData, hasMore, children, loaderText }) => {
    return (
        <InfiniteScroll
            className='infinite-scroll'
            dataLength={data.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>{loaderText}</h4>}
        >
            {children}
        </InfiniteScroll>
    );
};

