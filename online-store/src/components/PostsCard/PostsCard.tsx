import styles from './PostsCard.module.css'
import { Icon } from '@iconify/react/dist/iconify.js'

//Tipar props
type PostType = {
    title: string
    summary: string
    publishDate: string
    numberOfComments: number
    link: string
    postImage: string
    categories: string[]
}

function PostsCard(props: PostType) {

    console.log(props.categories.find((category) => category === "New"))
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                {props.categories.find((category) => category === "New") && <span>New</span>}
                <img src={props.postImage} />
            </div>
            <div className={styles.info}>
                <div className={styles.categories}>
                    {props.categories.map((category) => <span>{category}</span>)}
                </div>
                <h3 className={styles.title}>
                    {props.title}
                </h3>
                <p className={styles.summary}>
                    {props.summary}
                </p>
                <div className={styles.postMeta}>
                    <div className={styles.metadata}>
                        <Icon icon="mdi:clock-outline" height="2rem" />
                        <span>{props.publishDate}</span>
                    </div>
                    <div className={styles.metadata}>
                        <Icon icon="ooui:chart" height="2rem" />
                        <span>{props.numberOfComments} comments</span>
                    </div>
                </div>
                <a href={props.link}>
                    Learn More
                    <Icon icon="material-symbols-light:chevron-forward" height="2.5rem" />
                </a>
            </div>

        </div>
    )
}

export default PostsCard