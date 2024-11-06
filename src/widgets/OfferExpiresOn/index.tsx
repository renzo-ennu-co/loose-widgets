import { useEffect, useState } from "react";
import { Container, DimensionSpan, FormattedDateContainer, FormattedDateSpan, TimeBoxAndDimensionContainer, TimeBoxContainer, TimeBoxSpan, TimeBoxesContainer, TimeBoxesSeparator, Wrapper } from "./styles";

const getFormattedFullDate = (date: Date) => {
  // Define an array to get the day and month names
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Get the day, date, month, year, hour, and timezone offset
  const dayName = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const monthName = monthsOfYear[date.getMonth()];
  const year = date.getFullYear();
  let hour = date.getHours();
  const isAM = hour < 12;
  const timezoneOffset = -date.getTimezoneOffset() / 60;

  // Format the hour for 12-hour clock
  hour = hour % 12 || 12; // Convert 0 to 12 for AM/PM format
  const amPm = isAM ? "AM" : "PM";

  // Format the timezone offset
  const timezoneString = `GMT${timezoneOffset >= 0 ? "+" : ""}${timezoneOffset}`;

  // Combine all parts into the final string
  const formattedDate = `${dayName}, ${dayOfMonth} of ${monthName}, ${year} @ ${hour} ${amPm} ${timezoneString}`;

  return formattedDate;
}

interface CountdownTimerProps {
  initialTime: number
}

const CountdownTimer = ({ initialTime }: CountdownTimerProps) => {
  const [countdownTime, setCountdownTime] = useState(initialTime);

  useEffect(() => {
      // Exit early if countdown has finished
      if (countdownTime <= 0) return;

      // Set up interval to count down every second
      const timerId = setInterval(() => {
          setCountdownTime((prevTime) => prevTime - 1);
      }, 1000);

      // Clear the interval when component unmounts or countdown completes
      return () => clearInterval(timerId);
  }, [countdownTime]);

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(countdownTime / 3600);
  const minutes = Math.floor((countdownTime % 3600) / 60);
  const seconds = countdownTime % 60;

  return (
      <>
        {countdownTime > 0 ? (
            <TimeBoxesContainer>
              <TimeBoxAndDimensionContainer>
                <TimeBoxContainer>
                  <TimeBoxSpan>{hours}</TimeBoxSpan>
                </TimeBoxContainer>
                <DimensionSpan>Hours</DimensionSpan>
              </TimeBoxAndDimensionContainer>
              <TimeBoxesSeparator>:</TimeBoxesSeparator>
              <TimeBoxAndDimensionContainer>
                <TimeBoxContainer>
                  <TimeBoxSpan>{minutes}</TimeBoxSpan>
                </TimeBoxContainer>
                <DimensionSpan>Min</DimensionSpan>
              </TimeBoxAndDimensionContainer>
              <TimeBoxesSeparator>:</TimeBoxesSeparator>
              <TimeBoxAndDimensionContainer>
                <TimeBoxContainer>
                  <TimeBoxSpan>{seconds}</TimeBoxSpan>
                </TimeBoxContainer>
                <DimensionSpan>Sec</DimensionSpan>
              </TimeBoxAndDimensionContainer>
            </TimeBoxesContainer>
        ) : (
            <span>Countdown complete!</span>
        )}
    </>
  );
};

const OfferExpiresOn = () => {
  const initialTime = 8 * 60 * 60; // 8 hours
  const date = new Date(new Date().getTime() + (initialTime * 1000));
  const formattedFullDate = getFormattedFullDate(date);

  return (
    <Container>
      <Wrapper>
        <FormattedDateContainer>
          <FormattedDateSpan>Offer expires on {formattedFullDate}</FormattedDateSpan>
        </FormattedDateContainer>
        <CountdownTimer initialTime={initialTime}/>
      </Wrapper>
    </Container>
  )
}

export default OfferExpiresOn;