import React from 'react'

const Pagination = (props) => {
    console.log(props.length)
    const length = props.length
  return (
    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a className="page-link" href='-'>Previous</a>
    </li>
    <li class="page-item">1</li>
    
    <li class="page-item">
      <a class="page-link" href="-">Next</a>
    </li>
  </ul>
</nav>
  )
}

export default Pagination