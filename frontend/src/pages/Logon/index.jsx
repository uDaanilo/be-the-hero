import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/Logo.svg'
import heroesImg from '../../assets/Pessoas.png'

export default props => {
   const [id, setId] = useState('')
   const history = useHistory()

   async function handleLogin(e){
      e.preventDefault()

      try {
         const res = await api.post("/sessions", { id })

         localStorage.setItem('ongId', id)
         localStorage.setItem('ongName', res.data.name)

         history.push("/profile")
      } catch (e) {
         alert("Falha no login, tente novamente")
      }
   }

   return (
      <div className="logon-container">
         <section className="form">
            <img src={logoImg} alt="logo"/>
            <form onSubmit={handleLogin}>
               <h1>Faca seu logon</h1>
               <input value={id} onChange={e => setId(e.target.value)} type="text" placeholder="Sua ID"/>
               <button className="button" type="submit">Entrar</button>
               <Link className="back-link" to="/register">
                  <FiLogIn size="16" color="E02041" />Nao tenho cadastro
               </Link>
            </form>
         </section>
         <img src={heroesImg} alt="heroes"/>
      </div>
   )
}