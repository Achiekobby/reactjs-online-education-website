import styled from "styled-components"

export const EventSection =styled.section`
margin: 4rem 0 2rem;
`
export const EventContainer = styled.div`
width: 100%;
padding: 10px 0;
`
export const Heading = styled.h1`
  font-size: 2.16rem;
  font-weight: 500;
  color: #444;
  text-align: center;
  padding: 2.5rem 0;

  span {
    color: #4635ff;
    font-weight: 600;
  }
`;
export const EventWrapper = styled.div`
max-width: 1300px;
padding: 0 20px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 1.5rem 1.2rem;
border-bottom: 1px solid lightgray;

@media screen and (max-width:768px){
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`
export const EventImage = styled.div`
width: 200px;
height: 200px;
border: none;
border-radius: 10px;
/* margin-right: 20px; */

`
export const ImageItem = styled.img`
width: 100%;
height: 100%;
border-radius: 10px;
object-fit: cover;
-o-object-fit: cover;
`
export const EventDate = styled.p`
  text-align: center;
  font-size: 1.03rem;
  color: #666;
  /* margin-right: 30px; */
`;
export const EventDetail = styled.div`
  padding: 1rem 0;
  text-align: left;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const EventTitle = styled.h3`
font-size: 1.15rem;
font-weight: 600;
color: #333;
margin-bottom: 20px;

`
export const EventAddress = styled.p`
font-size: 1.05rem;
color: #777;
font-weight: 500;
margin-bottom: 10px;

span{
    font-weight: 600;
    color: #333;
}
`
export const EventDuration = styled.p`
  font-size: 1.05rem;
  color: #777;
  font-weight: 500;
  margin-bottom: 10px;

  span {
    font-weight: 600;
    color: #333;
  }
`;