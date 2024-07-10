import styles from './SectionTitle.module.css'

type SectionTileType = {
    title: string
    subtitle: string
    tagline?: string
}

function SectionTile(props: SectionTileType) {
    //Destructuring das classes do module.css
    const { wrapper } = styles

    const { title, subtitle, tagline } = props;

    //
    //If/else
    if (tagline) {
        return (
            <div className={wrapper}>
                <h4>{tagline}</h4>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        );
    }

    return (
        <div className={wrapper}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}

// Ternarios
function SectionTile_ternary(props: SectionTileType) {
    //Destructuring das classes do module.css
    const { wrapper } = styles

    const { title, subtitle, tagline } = props;


    return (
        <div className={wrapper}>
            {tagline ? <h4>{tagline}</h4> : null}
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}
// Operador logico &&
function SectionTile_operator(props: SectionTileType) {
    //Destructuring das classes do module.css
    const { wrapper } = styles

    const { title, subtitle, tagline } = props;


    return (
        <div className={wrapper}>
            {tagline && <h4>{tagline}</h4>}
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}

export default SectionTile