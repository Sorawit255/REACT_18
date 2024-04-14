import "./Addform.css";
export default function AddForm() {
  return (
    <section className="container">
      <form>
        <label>Student Name</label>
        <input type="text" name="name" />
        <button type="submit" className="btn-add">บันทึก</button>
      </form>
    </section>
  );
}
