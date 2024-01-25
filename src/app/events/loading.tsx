import SkeletonCard from "@/components/SkeletonCard";

const Loading = () => {
  return (
    <div className="flex flex-wrap max-w-[1100px] mx-auto px-[20px] py-24 gap-20 justify-center">
      {Array.from({ length: 6 }).map((item, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </div>
  );
};

export default Loading;
