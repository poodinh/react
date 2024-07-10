import styles from './ProductListCard.module.css'
import productImg from '../../assets/products/product-cover-1.png'


function ProductListCard() {
    return (
        <div className={styles.productCard}>
            <img src={productImg} alt="product name" />
            <div className={styles.info}>
                <div className={styles.content}>
                    <h3 className={styles.name}>Graphic Design</h3>
                    <p className={styles.description}>English Department</p>
                </div>

                <div className={styles.variations}>
                    <h4>Color available:</h4>
                    <div className={styles.colors}>
                        <span style={{ backgroundColor: "#23A6F0" }}></span>
                        <span style={{ backgroundColor: "#23856D" }}></span>
                        <span style={{ backgroundColor: "#E77C40" }}></span>
                        <span style={{ backgroundColor: "#252B42" }}></span>
                    </div>
                </div>

            </div>
            <div className={styles.actions}>
                <div className={styles.price}>
                    <span className={styles.oldPrice}>16.48€</span>
                    <span className={styles.currentPrice}>6.48€</span>
                </div>
                <button>Add to cart</button>
            </div>

        </div>
    )
}

export default ProductListCard