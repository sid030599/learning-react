function TodoItem2() {
  let TodoName = "Buy Milk";
  let TodoDate = "07/31/2022";
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{TodoName} </div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
