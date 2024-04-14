import "./AddForm.css";
export default function AddForm(){
    return(
        <>
            <h2>แอพบริหารจัดการงาน</h2>
            <form>
                <div className="form-control">
                    <input typr="text" className="text-input"/>
                    <button type="submit"className="submit-btn">Add</button>
                </div>
            </form>
        </>
    )
}