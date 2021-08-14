import styled from "styled-components";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

export const Programmes = styled.section`
  margin: 5rem 0 2rem;
`;
export const ProgrammeContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
`;
export const Heading = styled.h1`
  font-size: 2.1rem;
  font-weight: 500;
  color: #777;
  padding: 2.5rem 0;
  text-align: center;

  span {
    color: #4635ff;
    font-weight: 600;
  }
`;
export const ProgrammeWrapper = styled.div`
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width:768px){
    flex-direction: column;
    align-items: center;
    justify-content:center;
  }
`;
export const ProgrammeCard = styled.div`
  width: 360px;
  border: none;
  border-radius: 10px;
  background: #fff;
  box-shadow: 3px 5px 20px 0px rgba(83, 87, 249, 0.43);
  margin-right: 30px;

  @media screen and (max-width:768px){
    margin-bottom: 40px;
    margin-right: 0;
  }
`;

export const CardTitle = styled.h3`
  width: 100%;
  padding: 1rem 0rem;
  color: #555;
  font-size: 1.15rem;
  font-weight: 600;
  text-align: center;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 270px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  -o-object-fit: cover;
`;
export const Content = styled.div`
  width: 100%;
  padding: 1rem 1.3rem;
  margin: 0 auto;
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0rem;
`;
export const Lessons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 10px;
`;
export const LessonsIcon = styled(HiOutlineBookOpen)`
  font-size: 1.5rem;
  color: #a766f8;
`;
export const LessonsText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #777;
  margin-left: 5px;
`;
export const Students = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 15px;
`;
export const StudentIcon = styled(FaGraduationCap)`
  font-size: 1.5rem;
  color: #f77d9f;
`;
export const StudentText = styled.p`
  font-size: 0.85rem;
  font-weight: 500;
  color: #777;
  margin-left: 5px;
`;
export const Ratings = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 15px;
`;
export const RatingIcon = styled(AiFillStar)`
  font-size: 1.5rem;
  color: #5357f9;
`;
export const RatingText = styled.p`
  font-size: 0.85rem;
  font-weight: 500;
  color: #777;
  margin-left: 5px;
`;
export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.6rem 0rem;
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  -o-object-fit: cover;
  margin-right: 5px;
`;
export const ProfileName = styled.p`
  font-size: 0.958rem;
  color: #777;
  font-weight: 500;
`;
export const LessonPrice = styled.h3`
  font-size: 1.65rem;
  font-weight: 600;
  background: -webkit-linear-gradient(45deg, #4021ee, #ed90cf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
