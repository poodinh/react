import styles from './Section.module.css'

type SectionPropsType = {
    children: React.ReactNode,
    fullwidth?: boolean | number
}

// Componente 
function Section(props: SectionPropsType) {

    const { children, fullwidth = false } = props;

    return (
        <section className={`${styles.section} ${fullwidth ? styles.fullwidth : ''}`}>
            {children}
        </section>
    )
}

export default Section