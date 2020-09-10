import React from 'react'

export default function Pagination() {
    return (
        <div className="container d-flex justify-content-center mt-5">
            <nav aria-label="...">
                <ul class="pagination pagination-sm align-self-center border-0">
                    
                    <li class="page-item mr-3 hover_pagination">8</li>
                    <li class="page-item mr-3 hover_pagination">9</li>
                    <li class="page-item mr-3 hover_pagination">10</li>
                    <li class="page-item mr-3 hover_pagination">...</li>
                    <li class="page-item mr-3 hover_pagination">24</li>
                    <li class="page-item mr-3 hover_pagination">25</li>
                    <li class="page-item  hover_pagination">26</li>
                  
                </ul>
            </nav>
            <a className="carousel-control-prev shop-arrow-prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"> <i className=" fa-2x mr-1 mt-2 fas fa-chevron-left"></i></span>
                            <span className="sr-only">Previous</span>
                        </a>
                                <a className="carousel-control-next shop-arrow-next">
                                    <span className="carousel-control-next-icon " aria-hidden="true"><i className=" fa-2x mt-2 ml-1 fas fa-chevron-right"></i></span>
                                    <span className="sr-only">Next</span>
                                </a>
        </div>
    )
}
