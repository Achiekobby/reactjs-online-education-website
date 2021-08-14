import styled from "styled-components"
import { Link } from "react-router-dom"

export const InfoSection = styled.section`
margin: 6rem 0 2rem;
`
export const InfoContainer = styled.div`
width: 100%;
padding: 20px 0;
`
export const HeadLine = styled.h1`
font-size: 2.16rem;
color: #333;
font-weight: 500;
line-height: 1.65;
margin-bottom: 30px;
text-align: center;
margin: 20px auto;
max-width: 60%;

span{
    color: #4635ff;
    font-weight: 600;
}

@media screen and (max-width:768px){
  font-size: 1.35rem;
  text-align: left;
}
`
export const InfoWrapper = styled.div`
max-width: 1300px;
padding: 0 20px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width:768px){
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`
export const InfoCard = styled.div`
  position: relative;
  width: 350px;
  background: #fff;
  border: none;
  border-radius: 10px;
  height: 500px;
  box-shadow: 3px 5px 20px 0px rgba(83, 87, 249, 0.43);
  margin-right: 30px;

  @media screen and (max-width:768px){
    margin-bottom: 40px;
    margin-right: 0;
  }
`;
export const CardImg = styled.div`
width: 100%;
height: 60%;
`
export const CardImage = styled.img`
width: 100%;
height: 100%;
border-top-left-radius: 10px;
border-top-right-radius:10px;
object-fit: cover;
-o-object-fit: cover;
object-position: center;
`
export const CardTitle=  styled.h3`
padding: 1rem 1.5rem;
font-weight: 600;
line-height: 1.65;
color: #444;
`
export const CardProfile = styled.div`
padding: 0rem 1.65rem;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
`
export const CardAuthor = styled.h3`
color: #777;
font-size: 1.03rem;
font-weight: 600;
`
export const CardDate = styled.p`
  color: #777;
  font-size: 1.03rem;
  font-weight: 600;
`;
export const CardSubText = styled(Link)`
  position: absolute;
  left: 0;
  bottom: 0;
  text-decoration: none;
  padding: 1rem 1.35rem;
  background: linear-gradient(
    45deg,
    hsla(250, 94%, 56%, 1) 12%,
    hsla(295, 86%, 53%, 1) 100%
  );
  color: #fff;
  font-weight: 600;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
transition: all .5s ease-in;
  &:hover{
      transform: scale(1.03);
  }
`;