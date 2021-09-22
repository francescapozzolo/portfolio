const Pdf = () => {
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <object
        data={"./assets/cv_pozzolo.pdf"}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        Curriculum vitae
      </object>
    </div>
  );
};

export default Pdf;
