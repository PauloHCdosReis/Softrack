import Icon from "@components/icon";

const LoadingRoot = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Icon
        name="LoaderCircle"
        className="animate-spin text-primary"
        size={120}
      />
    </div>
  );
};

export default LoadingRoot;
