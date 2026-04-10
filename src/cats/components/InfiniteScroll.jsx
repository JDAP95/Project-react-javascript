import { useEffect, useRef } from "react";

const InfiniteScroll = ({ children, loading, hasMore, onLoadMore }) => {
    const loaderRef = useRef(null);
    const observerRef = useRef(null);

    const loadingRef = useRef(loading);
    const hasMoreRef = useRef(hasMore);
    const onLoadMoreRef = useRef(onLoadMore);

    useEffect(() => { loadingRef.current = loading; }, [loading]);
    useEffect(() => { hasMoreRef.current = hasMore; }, [hasMore]);
    useEffect(() => { onLoadMoreRef.current = onLoadMore; }, [onLoadMore]);

    useEffect(() => {
        if (!loaderRef.current) return;

        const target = loaderRef.current;

        observerRef.current = new IntersectionObserver((entries) => {
            const entry = entries[0];

            if (
                entry.isIntersecting &&
                hasMoreRef.current &&
                !loadingRef.current
            ) {
                onLoadMoreRef.current();
            }
        });

        observerRef.current.observe(target);

        return () => {
            if (observerRef.current && target) {
                observerRef.current.unobserve(target);
            }
        };
    }, []);

    return (
        <>
            <div className="container-cats">
                {children}
            </div>

            <div ref={loaderRef} style={{ height: "50px" }}>
                {loading && <p>Loading more...</p>}
                {!loading && <p>No more cats.</p>}
            </div>
        </>
    );
};

export default InfiniteScroll;
