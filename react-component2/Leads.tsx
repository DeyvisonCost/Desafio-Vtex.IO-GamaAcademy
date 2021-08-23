import React, { useState } from 'react'
import axios from 'axios'


interface LeadsProps {
 
}
const Leads: StorefrontFunctionComponent<LeadsProps> = ({}) => {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  
  function handlePesquisa() {
    axios.get('https://4dehmslfe2.execute-api.us-east-2.amazonaws.com/items').then(function(response:any){console.log(response)})
    axios.put('https://4dehmslfe2.execute-api.us-east-2.amazonaws.com/items', 
      {
      id: `${telefone}`,
      email:`${email}`,
      name:`${nome}`
    }
  )
    .then(function (response:any) {
      console.log(response);
    })
    .catch(function (error:any) {
      console.log(error);
    });
    setNome('');
    setTelefone('');
    setEmail('');
    }
   
  return (
    <>
      <p><input type="text" className="nomeInput" placeholder="nome" value={nome} onChange={e => setNome((e.target as any).value)} /></p>
      <p><input type="tel" className="telefoneInput" placeholder="telefone" value={telefone} onChange={e => setTelefone((e.target as any).value)} /></p>
      <p><input type="email" className="emailInput" placeholder="email" value={email} onChange={e => setEmail((e.target as any).value)} /></p>
      <button type="button" onClick={handlePesquisa} >Cadastrar</button>
    </>
  )

  }
export default Leads