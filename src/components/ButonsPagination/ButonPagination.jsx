import React from 'react'

function ButonPagination({anterior,siguiente,prev,next}) {
  return (
    <div>
        {anterior?<button onClick={prev}>Anterior</button>:null}
        {siguiente?<button onClick={next}>Siguiente</button>:null}
        
    </div>
  )
}

export default ButonPagination