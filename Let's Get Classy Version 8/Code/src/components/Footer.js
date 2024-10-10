const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made by <strong>avinashMarkad</strong>
      </p>
    </footer>
  );
};

export default Footer;