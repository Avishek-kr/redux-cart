const Button = ({ onClickHandler, value, title, selectedCategory }) => {
  return (
    <button onClick={onClickHandler} value={value} className={value === selectedCategory ? 'btns active' : 'btns'}>
      {title} 
    </button>
  );
};

export default Button;
