import Invoice from './Components/Invoice';
import { useQuery, gql } from '@apollo/client';
import axios from "axios"


function App() {
  
  

  const getPdf =  ()=>{
    axios.get('http://localhost:5000/generate-pdf', { responseType: 'blob' })
    .then(function(response) {
      console.log(response)
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'generated.pdf');
      document.body.appendChild(link);
      link.click();
    })
    .catch(function(error) {
      console.error('Error downloading PDF:', error);
    });
  
    console.log("done")
  }
 
  return (
    <div className="App">
     <Invoice/>
    <button onClick={getPdf}>Download PDF</button>
    </div>
  );
}

export default App;

