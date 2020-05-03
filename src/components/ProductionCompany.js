import React from 'react'

const ProductionCompany = (props) => {
  const {logo, name} = props
  return (
    <div className="production-company">
      { logo ? <img className="production-company-logo" src={`http://image.tmdb.org/t/p/w200/${logo}`} alt={`${name}`}/>:null}
      </div>
  )
}

export default ProductionCompany
