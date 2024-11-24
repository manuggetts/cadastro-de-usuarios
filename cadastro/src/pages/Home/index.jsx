import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import pencil from '../../assets/pencil.svg'
import api from '../../services/api'

function Home() {

  const [users, setUsers] = useState([])
  const [editingUser, setEditingUser] = useState(null)

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers(){
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data)
  }

  async function createUsers(){
    if (editingUser) {
      await api.put(`/usuarios/${editingUser.id}`, {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value
      })
      setEditingUser(null)
    } else {
      await api.post('/usuarios', {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value
      })
    }

    getUsers()

    inputName.current.value = ''
    inputAge.current.value = ''
    inputEmail.current.value = ''
  }

  async function deleteUsers(id){
    if (editingUser && editingUser.id === id) {
      setEditingUser(null);
    }
    await api.delete(`/usuarios/${id}`)
    getUsers()
  }

  function startEditing(user) {
    inputName.current.value = user.name
    inputAge.current.value = user.age
    inputEmail.current.value = user.email

    setEditingUser(user)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='container'>
      <form>
        <h1>{editingUser ? 'Editar usuário' : 'Cadastro de usuários'}</h1>
        <input placeholder="Nome" name='name' type='text' ref={inputName}/>
        <input placeholder="Idade" name='age' type='number' ref={inputAge}/>
        <input placeholder="Email" name='email' type='email' ref={inputEmail}/>
        <button type='button' onClick={createUsers}>
          {editingUser ? 'Salvar' : 'Cadastrar'}
        </button>
      </form>

      {users.map(user => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <div className="card-actions">
            <button className="edit-button" onClick={() => startEditing(user)}>
            <img src={pencil} alt="Editar" />
            </button>
            <button className="delete-button" onClick={() => deleteUsers(user.id)}>
              <img src={Trash} alt="Excluir" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home;