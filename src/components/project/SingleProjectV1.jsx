import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const StyledImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const SingleProjectV1 = ({ project }) => {
    const { id, thumb, projectLink, subTitle, title, shape } = project;

    return (
        <>
            <div className="swiper-slide">
                <div className="project-style-one">
                    <StyledImage src={`/img/portfolio/${thumb}`} alt="Thumb" />
                    {/*<img src={`/img/portfolio/${thumb}`} alt="Thumb" />*/}
                    <div className="overlay">
                        <span>{subTitle}</span>
                        <h4><Link to={`/${projectLink}/${id}#`}>{title}</Link></h4>
                    </div>
                    <div className="shape">
                        <img src={`/img/shape/${shape}`} alt="shape" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV1;