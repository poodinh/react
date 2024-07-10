import styles from './Categories.module.css'
import CategoryCard from './CategoryCard/CategoryCard'

function CategoriesGrid() {
    return (
        <div className={styles.categoriesGrid}>
            <CategoryCard
                link="#cenas"
                image="https://images.stockcake.com/public/2/0/f/20ff3c4c-0af7-469a-8a69-ed7f90d1837b_large/stylish-urban-fashion-stockcake.jpg"
                category="Men"
            />
            <div>
            <CategoryCard
                link="#cenas"
                image="https://images.stockcake.com/public/e/b/2/eb235541-b608-4573-a434-8eab5f363070_large/urban-fashion-pose-stockcake.jpg"
                category="Women"
            />
            </div>
            <div>
            <CategoryCard
                link="#cenas"
                image="https://images.stockcake.com/public/3/9/5/39550475-8456-40da-8290-15728956de44_large/urban-style-pose-stockcake.jpg"
                category="Accessories"
            />
            </div>
            <div>
            <CategoryCard
                link="#cenas"
                image="https://images.stockcake.com/public/6/a/e/6aeec4b7-69d0-4f5a-9d07-84a1d77ebc0e_large/retro-fashion-pose-stockcake.jpg"
                category="Kids"
            />
            </div>
        </div>
    )
}

export default CategoriesGrid