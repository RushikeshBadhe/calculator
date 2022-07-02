import { useState } from 'react';
import './App.css';
import Table2 from './Table2';

function App() {
  const [state, setState] = useState({ input1: 100, input2: 20, input3: 20, input4: 0.1, input5: 0.1, input6: 0.6, input7: 1.5, input8: 1.5,input9:0.79 });
  const [results, setResults] = useState({ gram: null, kg: null });
  const [student1, setStudent1] = useState(null);
  const onChnage = (e) => {
    const val = parseFloat(e.target.value);
    const name = e.target.name;
    setState({ ...state, [name]: val });
  }
  const students1 = async (e) => {
    const stud = await e.target.value;
    setStudent1(stud);
  }
  const result = () => {
    if (student1 == null) {
      alert('कृपया उपस्थित विद्यार्थी भरा.')
    }
    console.log(state);
    const sum = parseFloat(state.input1 + state.input2 + state.input3 + state.input4 + state.input5 + state.input6 + state.input7 + state.input8);
    console.log(sum);
    setResults({ ...results, gram: (sum * student1).toFixed(2), kg: (sum * student1).toFixed(2) })
  }
  return (
    <div className="App border border-success w-10">
      <h3>इयत्ता १ ते ५</h3>
      <input type="number" value={student1} onChange={students1} className="w-2" placeholder='येथे उपस्थित विद्यार्थी भरा'></input>
      <table className="table table-striped border border-3" >
        <thead>
          <tr>
            <th scope="col">खाद्यपदार्थ</th>
            <th scope="col">वजन (ग्राम)</th>
            <th scope='col' >एकूण </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>तांदूळ</td>
            <td><input className="w-50" name='input1' type='number' onChange={e => onChnage(e)} value={state.input1}></input></td>
            <td>{(state.input1*student1).toFixed(2)}</td>
          </tr>
          <tr>
            
            <td>तूरडाळ/मुंगडाळ/मसूरदाळ</td>
            <td><input className="w-50" name='input2' type='number' onChange={e => onChnage(e)} value={state.input2}></input></td>
            <td>{(state.input2*student1).toFixed(2)}</td>
          </tr>
          <tr>
            
            <td >चवळी/मुग/मटकी/वाटणा/चना</td>
            <td ><input className="w-50" name='input3' type='number' onChange={e => onChnage(e)} value={state.input3} ></input></td>
            <td>{(state.input3*student1).toFixed(2)}</td>
          </tr>
          <tr>
            
            <td>जिरा</td>
            <td><input className="w-50" name='input4' type='number' onChange={e => onChnage(e)} value={state.input4} ></input></td>
            <td>{(state.input4*student1).toFixed(2)}</td>
          </tr>
          <tr>
           
            <td>मोहरी</td>
            <td><input className="w-50" name='input5' type='number' onChange={e => onChnage(e)} value={state.input5} ></input></td>
            <td>{(state.input5*student1).toFixed(2)}</td>
          </tr>
          <tr>
           
            <td>हळद</td>
            <td><input className="w-50" name='input6' type='number' onChange={e => onChnage(e)} value={state.input6} ></input></td>
            <td>{(state.input6*student1).toFixed(2)}</td>
          </tr>
          <tr>
            
            <td>मसाला</td>
            <td><input className="w-50" name='input7' type='number'  onChange={e => onChnage(e)} value={state.input7} ></input></td>
            <td>{(state.input7*student1).toFixed(2)}</td>
          </tr>
          <tr>
            <td>मीठ</td>
            <td><input className="w-50" name='input8' type='number'  onChange={e => onChnage(e)} value={state.input8} ></input></td>
            <td>{(state.input8*student1).toFixed(2)}</td>
          </tr>
          <tr>
            <td>तेल</td>
            <td><input className="w-50" name='input9' type='number' onChange={e => onChnage(e)} value={state.input9}></input></td>
            <td>{(state.input9*student1).toFixed(2)+ ' रु '}</td>
          </tr>
        </tbody>
      </table>
      <div className='d-flex justify-content-center'>
      <div className=' card bg-light mb-3' Style='max-width: 18rem;'>
      <div className="card-header">१ ते ५ एकूण खर्च </div>
      <div className="card-body">
      <p className="card-title" >{(student1*2.68).toFixed(2)+' रु'} </p>
      </div>
      </div>
      </div>
     
        <Table2 />
      </div>
      );
}
      export default App;
