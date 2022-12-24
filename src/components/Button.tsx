type ButtonProps = {
  image: string;
  name: string;
  // handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({ image, name }: ButtonProps) => {
  return (
    <button className="options">
      <img src={image} alt={name} /> {name}
    </button>
  );
};

export default Button;
