const Label = () => {
  const today = new Date();
  return (
    <div className="mx-3 text-white footer">
      © &nbsp;
      <span>{today.getFullYear()}</span>
      &nbsp; Riccardo Limiti
    </div>
  );
};

export default Label;
