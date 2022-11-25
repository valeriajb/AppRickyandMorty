import React from 'react'

function ButonPagination({anterior,siguiente,onPrev,onNext}) {

  return (
    
    <div>
        {anterior?<button onClick={onPrev}>Anterior</button>:null}
        {siguiente?<button onClick={onNext}>Siguiente</button>:null}
        
    </div>
  )
}

export default ButonPagination