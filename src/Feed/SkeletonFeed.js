import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonPost = () => {
  const skeletonOption = [];
  for (let i = 0; i < 4; i++) {
    skeletonOption.push(
      <div key={i} className="inputOption">
        <Skeleton height={30} width={60} />
      </div>
    );
  }
  return (
    <div className="post">
      <div className="post__header">
        <Skeleton circle={true} height={50} width={50} />
        <div className="post__info">
          <h2 style={{ paddingBottom: 10 }}>
            <Skeleton width={120} height={20} />
          </h2>

          <p>
            <Skeleton width={120} height={20} />
          </p>
        </div>
      </div>
      <div className="post__body">
        <Skeleton count={5} />
      </div>
      <div className="post__buttons">{skeletonOption}</div>
    </div>
  );
};

export default function SkeletonFeed() {
  return (
    <div>
      <SkeletonPost />
      <SkeletonPost />
      <SkeletonPost />
    </div>
  );
}
