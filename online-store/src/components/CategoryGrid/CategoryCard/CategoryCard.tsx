import style from './CategoryCard.module.css'

function CategoryCard(props) {
  const { category, link, image } = props;
  const {cardCategory} = style


  return (
      <div className={cardCategory} style={{
          backgroundImage: `url(${image})`
      }}>
          <a href={link}>{category}</a>
      </div>
  )
}

export default CategoryCard