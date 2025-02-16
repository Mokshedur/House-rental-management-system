const CardLayout = ({ children }) => {
  return (
    <div className="px-4 py-4 border border-light-gray-2 rounded-xl hover:shadow-lg">
      {children && children}
    </div>
  );
};

export default CardLayout;
