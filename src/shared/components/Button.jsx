const Button = ({className, onClick, children, disabled = false }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`} disabled={disabled} >
        {children}
    </button>
  );
}

export default Button;