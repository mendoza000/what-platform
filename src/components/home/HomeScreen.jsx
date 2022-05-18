import React from 'react'

export const HomeScreen = () => {
  return (
    <div className="home__container">
      <h1 className="home__title">
        What <span className="ui__cp">Platform</span>
      </h1>
      <p className="home__subtitle">
        ¿En que plataforma puedo verlo?
      </p>

      <form className='home__form'>
        <input 
          type="text" 
          className="home__input" 
          placeholder='Titulo de pelicula/serie/docuemental'
          />
        <button 
          className="home__submit"
          type='submit'
          >
          <box-icon name='search'></box-icon>
          Buscar
        </button>
      </form>
    </div>
  )
}
