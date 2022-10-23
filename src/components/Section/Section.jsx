import PropTypes from 'prop-types';
import { css }  from 'components/Section/Section.module.css'

export const Section = ({ title, children }) => {
    return <section  className={title ? css.superSection : css.baseSection}>
           {title && <h2>{title}</h2>}
           {children}
        </section>
}


Section.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired,
}; 