const Label = () => {
  const today = new Date();
  return (
      <footer className="relative bottom-0">

          <div className="mx-3 text-white">
            © &nbsp;
            <span>{today.getFullYear()}</span>
            &nbsp; Riccardo Limiti
          </div>
      </footer>
  );
};

export default Label;
