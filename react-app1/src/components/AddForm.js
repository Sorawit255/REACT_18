export default function AddForm(){
    return(
        <>
            <h2>แบบฟอร์มจัดการงาน</h2>
            <form className="form-group">
                <input typr="text" className="text-input"/>
                <button type="submit"className="submit-btn">Add</button>
            </form>
        </>
    )
}