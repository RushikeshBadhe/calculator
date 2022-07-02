import {useState} from 'react';
function Table2(){
const [state,setState] = useState({input1:150,input2:30,input3:30,input4:0.1,input5:0.1,input6:0.75,input7:2.5,input8:1.5});
const [results,setResults] = useState({gram:null,kg:null});
const [student1,setStudent1] = useState(null);
const onChnage=(e)=>{
  const val = parseFloat(e.target.value);
  const name = e.target.name;
  setState({...state,[name]:val});
}
const students1 =async (e)=>{
  const stud = await e.target.value;
  setStudent1(stud);
}
const result=()=>{
  if(student1==null){
    alert('कृपया उपस्थित विद्यार्थी भरा.')
  }
 console.log(state);
 const sum = parseFloat(state.input1+state.input2+state.input3+state.input4+state.input5+state.input6+state.input7+state.input8);
 console.log(sum);
 setResults({...results,gram:(sum*student1).toFixed(2),kg:(sum*student1).toFixed(2)})
}
return (
  <div className="App">
    <h3>इयत्ता ६ ते ८ </h3>
    <input type="number" value={student1} onChange={students1} className="w-2" placeholder='येथे उपस्थित विद्यार्थी भरा'></input>
    <table className="table table-striped border border-2" >
    <thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">खाद्यपदार्थ</th>
    <th scope="col">वाजन (ग्राम)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">1</th>
    <td>तांदूळ</td>
    <td><input className="w-50" name='input1' type='number' onChange={e=>onChnage(e)} value={state.input1}></input></td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>तूरडाळ/मुंगडाळ/मसूरदाळ</td>
    <td><input className="w-50" name='input2' type='number' onChange={e=>onChnage(e)} value={state.input2}></input></td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td >चवळी/मुग/मटकी/वाटणा/चना</td>
    <td ><input className="w-50" name='input3' type='number' onChange={e=>onChnage(e)} value={state.input3} ></input></td>
  </tr>
  <tr>
    <th scope="row">4</th>
    <td>जिरा</td>
    <td><input className="w-50" name='input4' type='number' onChange={e=>onChnage(e)} value={state.input4} ></input></td>
  </tr>
  <tr>
    <th scope="row">5</th>
    <td>मोहरी</td>
    <td><input className="w-50" name='input5' type='number' onChange={e=>onChnage(e)} value={state.input5} ></input></td>
  </tr>
  <tr>
    <th scope="row">6</th>
    <td>हळद</td>
    <td><input className="w-50" name='input6' onChange={e=>onChnage(e)} value={state.input6} ></input></td>
  </tr>
  <tr>
    <th scope="row">7</th>
    <td>मसाला</td>
    <td><input className="w-50" name='input7' onChange={e=>onChnage(e)} value={state.input7} ></input></td>
  </tr>
  <tr>
    <th scope="row">8</th>
    <td>मीठ</td>
    <td><input className="w-50" name='input8' onChange={e=>onChnage(e)} value={state.input8} ></input></td>
  </tr>
</tbody>
    </table>
    <div className='d-flex justify-content-center'>
      <div className=' card bg-light mb-3' Style='max-width: 18rem;'>
      <div className="card-header"><button onClick={result}>Result</button></div>
      <div className="card-body">
      <p className="card-title" >{results.gram && results.gram + ' ग्राम'} </p>
      <p className="card-title">{results.kg && (results.gram / 1000).toFixed(2) + ' किलो.ग्राम'} </p>
      </div>
      </div>
      </div>
  </div>
  )
}

export default Table2