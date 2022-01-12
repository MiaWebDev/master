import React from "react";

const Tamom = props => {
  const tugriJavoblar = Object.entries(props.results).filter((item) => {
    return item[1] === 'success';
  });

  return (
    <div>
      <h3>Tamom</h3>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Natijalari:</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Savol</th>
                <th scope="col">Javobi</th>
              </tr>
            </thead>
            <tbody>
              {props.savollar.map((savol, index) => (<tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{savol.text}</td>
                <td className={'text-' + (props.results[index] === 'success' ? 'success' : 'danger')}>{props.results[index] === 'success' ? "\u2714" : "\u2716"}</td>
              </tr>))}
            </tbody>
          </table>
          <div className="my-4"><strong>Jami:</strong> {props.savollar.length}/{tugriJavoblar.length}</div>
          <div className="btn btn-info" onClick={props.onQayta}>Boshidan</div>
        </div>
      </div>
    </div>
  );
};

export default Tamom;