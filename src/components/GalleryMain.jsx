import React from 'react';
import { CardProduct } from './CardProduct';

export const GalleryMain = () => {

    const [filterSelected, setFilterSelected] = useState("Todos");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState(["Todos"]);

    const handleFilter = (e) => {
        setFilterSelected(e.target.value);
        updateFilterProducts(products, e.target.value);
    }


    return (
        <section>
            <div className="container">
                <div >
                    <h2 >Nuestros artículos</h2>
                    <Image src={brushTwo} alt="Paint" className={styles.brush} />
                </div>
            </div>
            <div >
          <aside >
          <ul >
              
            <li>
                <h1>list</h1>
            </li>
            </ul>
          </aside>
          <div >
            <ol >
            <div>
               <CardProduct/>
            </div>
            </ol>
          </div>
          </div>
        </section>
    );
};

