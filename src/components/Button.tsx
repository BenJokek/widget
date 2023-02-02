type ButtonProps = {
  image: string;
  name: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({ image, name, onClick }: ButtonProps) => {
  return (
    <button className="options" onClick={onClick}>
      <img src={image} alt={name} /> {name}
    </button>
  );
};

export default Button;
