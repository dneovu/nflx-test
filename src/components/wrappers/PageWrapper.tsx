interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="mx-auto mb-5 flex h-screen max-w-[1440px] flex-col px-4 lg:px-44">
      {children}
    </div>
  );
};

export default PageWrapper;
