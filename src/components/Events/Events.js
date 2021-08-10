import React from "react";
import { Button } from "../../helpers/Buttons/Buttons";
import {
  EventSection,
  EventContainer,
  EventWrapper,
  Heading,
  EventImage,
  ImageItem,
  EventDate,
  EventDetail,
  EventTitle,
  EventAddress,
  EventDuration,
} from "./EventsElements";

const Events = ({ events }) => {
  return (
    <>
      <EventSection>
        <EventContainer>
          <Heading>
            All Upcoming <span>Events</span>
          </Heading>
          {events.map((data, index) => {
            return (
              <EventWrapper key={index}>
                <EventImage>
                  <ImageItem src={data.imageURL} alt="" />
                </EventImage>
                <EventDate>{data.date}</EventDate>
                <EventDetail>
                  <EventTitle>{data.title}</EventTitle>
                  <EventAddress>
                    <span>Address: </span>
                    {data.address}
                  </EventAddress>
                  <EventDuration>
                    <span>Start: </span>
                    {data.duration}
                  </EventDuration>
                </EventDetail>
                <Button primary>Join Event</Button>
              </EventWrapper>
            );
          })}
        </EventContainer>
      </EventSection>
    </>
  );
};

export default Events;
