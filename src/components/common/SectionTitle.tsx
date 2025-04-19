const SectionTitle = ({ title, color }: { title: string; color?: string }) => {
  return (
    <h2
      className={`${color ? color : 'text-secondary'} mb-5 text-lg font-semibold`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
